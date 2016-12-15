const request = require('request');

const UTILS = require('./utils');
const v1 = require('../v1');
const v2 = require('../v2');
const MODULES = [v1, v2];

const API_HOST = 'https://connect.squareup.com';

/* **********************************************************
 *     EXPORTS
 ************************************************************ */
module.exports = SquareConnect;

/**
 * Main Export, instantiates a Square Client
 * @param {String}  locationId                - Square Location ID
 * @param {String}  accessToken               - Access Token per location
 * @param {Boolean} [extendedDebugInfo]       - Extended response info, useful for debugging as Square doesn't always return an explicit error
 */
function SquareConnect(locationId, accessToken, extendedDebugInfo = false) {
  internal(this, {locationId: locationId, accessToken: accessToken});
  this.locationId = locationId;
  this.extendedDebugInfo = extendedDebugInfo;
  instanceLocations.add(this);
  return this;
}
MODULES.forEach(module => {
  Object.keys(module).forEach(key => {
    SquareConnect.prototype[key] = module[key];
  });
});

// ----------------------------------------------------------
//    Storage
// ----------------------------------------------------------

const instanceMap = new WeakMap();
const instanceLocations = new Set();

function internal(obj, params) {
  if (!instanceMap.has(obj)) {
    instanceMap.set(obj, params);
  }
  return instanceMap.get(obj);
}

// ----------------------------------------------------------
//    Instance Helpers
// ----------------------------------------------------------

SquareConnect.prototype.listInstances = function listInstances() {
  return instanceLocations;
}

SquareConnect.prototype.getToken = function getToken() {
  return instanceMap.get(this).accessToken;
}

SquareConnect.prototype.constructOpts = function constructOpts(method, uri) {
  switch (arguments.length) {
    case 1:
      uri = method;
      method = 'GET';
  }

  const API_HEADERS = {
    Authorization: `Bearer ${this.getToken()}`,
    Accept: 'application/json'
  };

  if (uri[0] === '/') {
    uri = uri.slice(1, uri.length);
  }

  return {
    method: method,
    uri: `${API_HOST}/${uri}`,
    headers: API_HEADERS
  };
}

SquareConnect.prototype.handleRequest = function handleRequest(opts, callback) {
  request(opts, (err, response, body) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    if (response.statusCode !== 200 ) {
      return this.handleError(response, body, callback);
    }

    if (typeof body === 'string') {
      body = JSON.parse(body);
    }

    callback(null, body);
  });
}

SquareConnect.prototype.handleError = function handleError(response, body, callback) {
  let errInfo = {
    statusCode: response.statusCode,
    message: response.statusMessage
  };

  if (this.extendedDebugInfo) {
    errInfo.body = body;
  }

  let errStr = JSON.stringify(errInfo);
  return callback(new Error(errStr));
}

/**
 * Extracts AID from customer receipt based on Url, only to be used for Card Transactions
 * @param  {String}   receiptUrl - URL of payment receipt
 * @param  {Function} callback
 */
SquareConnect.prototype.getCustomerInfoFromReceipt = function getCustomerInfoFromReceipt(receiptUrl, callback) {
  var opts = {
    headers: {
      Authorization: `Bearer ${this.getToken()}`,
      Accept: 'text/html'
    },
    method: 'GET',
    uri: receiptUrl
  };

  request(opts, (err, response, body) => {
    if (err) {
      return callback(err);
    }

    var sqReceiptInfo = utils.stripCustomerFromBody(body);
    callback(null, sqReceiptInfo);
  });
}
