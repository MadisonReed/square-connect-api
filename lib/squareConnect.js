const UTILS = require('./utils');
const v1 = require('../v1');
const v2 = require('../v2');

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
 this.locationId = locationId;
 this.accessToken = accessToken;
 this.extendedDebugInfo = extendedDebugInfo;
 return this;
}

SquareConnect.prototype.getCustomerInfoFromReceipt = UTILS.getCustomerInfoFromReceipt;
SquareConnect.prototype.constructOpts = UTILS.constructOpts;
SquareConnect.prototype.handleRequest = UTILS.handleRequest;
SquareConnect.prototype.handleError = UTILS.handleError;

console.log('v1', v1);
