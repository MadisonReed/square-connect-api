const cheerio = require('cheerio');
const request = require('request');

const API_HOST = 'https://connect.squareup.com';

exports.getCustomerInfoFromReceipt = getCustomerInfoFromReceipt;
exports.constructOpts = constructOpts;
exports.handleRequest = handleRequest;
exports.handleError = handleError;

exports.constructQueryString = constructQueryString;
exports.stripCustomerFromBody = stripCustomerFromBody;

// ----------------------------------------------------------
//    Utils
// ----------------------------------------------------------
function constructQueryString(params) {
  var result = '';
  var startParam = '?';
  Object.keys(params).forEach((key, idx) => {
    if (idx > 0) {
      startParam = '&'
    }
    result += `${startParam}${key}=${params[key]}`
  });
  return result;
}

function stripCustomerFromBody(body) {
  var $ = cheerio.load(body);
  var divContent = $('.chip-application-id').text();
  var AID = divContent.match(/AID: ([A-Z]\d+)/);
  var nameOnCard = $('.name_on_card').text();

  if (AID) {
    AID = AID[1];
  }

  return {AID, nameOnCard};
}


// ----------------------------------------------------------
//    Instance Helpers
// ----------------------------------------------------------

/**
 * Extracts AID from customer receipt based on Url, only to be used for Card Transactions
 * @param  {String}   receiptUrl - URL of payment receipt
 * @param  {Function} callback
 */
function getCustomerInfoFromReceipt(receiptUrl, callback) {
  var opts = {
    headers: {
      Authorization: `Bearer ${this.accessToken}`,
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

function constructOpts(method, uri) {
  switch (arguments.length) {
    case 1:
      uri = method;
      method = 'GET';
  }

  const API_HEADERS = {
    Authorization: `Bearer ${this.accessToken}`,
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

function handleRequest(opts, callback) {
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

function handleError(response, body, callback) {
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
