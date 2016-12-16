const utils = require('../lib/utils');

/* **********************************************************
 *    API V2
 ************************************************************ */

// ----------------------------------------------------------
//    General Methods
// ----------------------------------------------------------

/**
 * Lists Locations for the Square Connect API V2
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v2/#navsection-location">Read More</a>
 */
exports.v2listLocations = function v2listLocations(callback) {
  this.handleRequest(this.constructOpts('/v2/locations'), callback);
}

// ----------------------------------------------------------
//    Customer Methods
// ----------------------------------------------------------

const CUSTOMER_ROUTE = '/v2/customers';
/**
 * Lists Customers via instance Auth Token
 * @param  {Object}  [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listcustomers">>Properties</a>
 * @param  {Function} callback
 */
exports.listCustomers = function listCustomers(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = utils.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`${CUSTOMER_ROUTE}${queryParams}`), callback);
}

/**
 * Fetches a customer based on Customer ID
 * @param  {String}   customerId - customer ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-retrievecustomer">Read More</a>
 * @param  {Function} callback
 */
exports.getCustomer = function getCustomer(customerId, callback) {
  this.handleRequest(this.constructOpts(`${CUSTOMER_ROUTE}/${this.customerId}`), callback);
}

/**
 * Creates a customer based on provided data
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomer">Properties</a>
 * @param  {Function} callback
 */
exports.createCustomer = function createCustomer(data, callback) {
  var opts = this.constructOpts('POST', CUSTOMER_ROUTE);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a customer based on provided Customer ID and Customer Data
 * @param  {String}   customerId - Customer ID to update
 * @param  {Object}   data       <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-updatecustomer">Properties</a>
 * @param  {Function} callback
 */
exports.updateCustomer = function updateCustomer(customerId, data, callback) {
  var opts = this.constructOpts('PUT', `${customerId}/customerId`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a customer based on proviced Customer Id
 * @param  {String}   customerId - Customer Id to Delete <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomer">Read More</a>
 * @param  {Function} callback
 */
exports.deleteCustomer = function deleteCustomer(customerId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `${CUSTOMER_ROUTE}/${customerId}`), callback);
}

// ----------------------------------------------------------
//    Customer Card Methods
// ----------------------------------------------------------

/**
 * Creates a card for provided Customer Id
 * @param  {String}   customerId - Customer ID to add card
 * @param  {Object}   data       <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomercard">Properties</a>
 * @param  {Function} callback
 */
exports.createCustomerCard = function createCustomerCard(customerId, data, callback) {
  var opts = this.constructOpts('POST', `/v2/customers/${customerId}/cards`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a card associated with a customer
 * @param  {String}   customerId  provided Customer Id  <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomercard">Read More</a>
 * @param  {String}   cardId     Card Id to delete
 * @param  {Function} callback
 */
exports.deleteCustomerCard = function deleteCustomerCard(customerId, cardId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v2/customers/${customerId}/cards/${cardId}`), callback);
}

// ----------------------------------------------------------
//    Transaction Methods
// ----------------------------------------------------------

/**
 * lists transactions for a location, has various query parameters
 * @param  {Object}  [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listtransactions">Properties</a>
 * @param  {Function} callback [description]
 */
exports.listTransactions = function listTransactions(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = utils.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts('GET', `/v2/locations/${this.locationId}/transactions${queryString}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result.transactions);
  });
}

/**
 * Fetches a transaction based on Transaction ID
 * @param  {String}   transactionId transaction ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-retrievetransaction">Read More</a>
 * @param  {Function} callback
 */
exports.getTransaction = function getTransaction(transactionId, callback) {
  this.handleRequest(this.constructOpts('GET', `/v2/locations/${this.locationId}/transactions/${transactionId}`), callback);
}

/**
 * Voids a transaction based on Transaction ID
 * @param  {String}   transactionId - Transaction ID to void <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-voidtransaction">Read More</a>
 * @param  {Function} callback
 */
exports.voidTransaction = function voidTransaction(transactionId, callback) {
  this.handleRequest(this.constructOpts('POST', `/v2/locations/${this.locationId}/transactions/${transactionId}/void`), callback);
}

/**
 * Charges a transaction with provided data
 * @param  {Object}   data          <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-charge">Properties</a>
 * @param  {Function} callback
 */
exports.chargeTransaction = function chargeTransaction(data, callback) {
  var opts = this.constructOpts('POST', `/v2/locations/${this.locationId}/transactions`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Captures a transaction based on Transaction ID
 * @param  {String}   transactionId <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-capturetransaction">Read More</a>
 * @param  {Function} callback
 */
exports.captureTransaction = function captureTransaction(transactionId, callback) {
  this.handleRequest(this.constructOpts('POST', `/v2/locations/${this.locationId}/transactions/${transactionId}/capture`), callback);
}

// ----------------------------------------------------------
//    Refund Methods
// ----------------------------------------------------------

/**
 * Creates a refund for the provided Transaction Id
 * @param  {String}   transactionId - Transaction Id to refund
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createrefund">Read More</a>
 */
exports.createRefund = function createRefund(transactionId, callback) {
  this.handleRequest(this.constructOpts('POST', `/v2/locations/${this.locationId}/transactions/${transactionId}/refund`), callback);
}

/**
 * Lists Refunds for an instance
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listrefunds">Properties</a>
 * @param  {Function} callback
 */
exports.listRefunds = function listRefunds(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = utils.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v2/locations/${this.locationId}/refunds${queryString}`), callback);
}
