/* **********************************************************
 *    API V1
 ************************************************************ */
 //V1
 //TODO: ALL of orders
 //TODO: ALL of discounts
 //TODO: ALL of fees
 //TODO: ALL of pages
 //TODO: ALL of cells
 //TODO: ALL of modifier lists
 //TODO: ALL of modifier options

// ----------------------------------------------------------
//    Main Merchant Methods
// ----------------------------------------------------------
const MERCHANT_ROUTE = '/v1/me';
/**
 * Returns known Square Data for Merchant based on Auth Token
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-merchantid">Read More</a>
 */
exports.getMerchantProfile = function getMerchantProfile(callback) {
  this.handleRequest(this.constructOpts(MERCHANT_ROUTE), callback);
}

/**
 * Returns a list of all locations for this merchant
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-locations">Read More</a>
 */
exports.listLocations = function listLocations(callback) {
  this.handleRequest(this.constructOpts(`${MERCHANT_ROUTE}/locations`), callback);
}

// ----------------------------------------------------------
//    Role Methods
// ----------------------------------------------------------
const ROLE_ROUTE = '/v1/me/roles';
/**
 * Returns known Square Roles for Merchant based on Instance Auth Token
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roles">Properties</a>
 * @param  {Function} callback
 */
exports.listRoles = function listRoles(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`${ROLE_ROUTE}${queryParams}`), callback);
}

/**
 * Returns a role, queried by Id
 * @param  {String}   roleId - Id of role to query <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roleid">Read More</a>
 * @param  {Function} callback
 */
exports.getRole = function getRole(roleId, callback) {
  this.handleRequest(this.constructOpts(`${ROLE_ROUTE}/${roleId}`), callback);
}

/**
 * Creates a Role
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-roles">Properties</a>
 * @param  {Function} callback
 */
exports.createRole = function createRole(data, callback) {
  this.handleRequest(this.constructOpts('POST', ROLE_ROUTE), callback);
}

/**
 * Updates a Role based on roleId and provided data
 * @param  {String}   roleId   Role Id to Update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-roleid">Properties</a>
 * @param  {Function} callback
 */
exports.updateRole = function updateRole(roleId, data, callback) {
  this.handleRequest(this.constructOpts('PUT', `${ROLE_ROUTE}/${roleId}`), callback);
}

// ----------------------------------------------------------
//    Employee methods
// ----------------------------------------------------------

/**
 * Returns Employees based on Instande Location Id
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employees">Properties</a>
 * @param  {Function} callback
 */
exports.listEmployees = function listEmployees(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`${MERCHANT_ROUTE}/employees${queryString}`), callback);
}

/**
 * Returns and Employee by employee Id
 * @param  {String}   employeeId - Employee Id to Fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employeeid">Read More</a>
 * @param  {Function} callback
 */
exports.getEmployee = function getEmployee(employeeId, callback) {
  this.handleRequest(this.constructOpts(`${MERCHANT_ROUTE}/${employeeId}`), callback);
}

/**
 * Creates an employee
 * @param  {Object} data <a href="https://docs.connect.squareup.com/api/connect/v1/#post-employees">Properties</a>
 * @param  {Function} callback
 */
exports.createEmployee = function createEmployee(data, callback) {
  var opts = this.constructOpts('POST', `${MERCHANT_ROUTE}/employees`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Update Employee based on employee ID
 * @param  {String}   squareEmployeeId - Employee Id to Update
 * @param  {Object}   data        <a href="https://docs.connect.squareup.com/api/connect/v1/#put-employeeid">Properties</a>
 * @param  {Function} callback
 */
exports.updateEmployee = function updateEmployee(squareEmployeeId, data, callback) {
  var opts = this.constructOpts('PUT', `${MERCHANT_ROUTE}/employees/${squareEmployeeId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Item methods
// ----------------------------------------------------------

/**
 * list Items based on location ID
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-items">Read More</a>
 */
exports.listItems = function listItems(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/items`), callback);
}

/**
 * Creates an Item
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-items">Properties</a>
 * @param  {Function} callback
 */
exports.createItem = function createItem(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/items`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Fetches an Item based on Item ID
 * @param  {String}   itemId   item ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-itemid">Read More</a>
 * @param  {Function} callback
 */
exports.getItem = function getItem(itemId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/items/${itemId}`), callback);
}

/**
 * Updates an Item
 * @param  {String}   itemId   Item ID to update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid">Properties</a>
 * @param  {Function} callback
 */
exports.updateItem = function updateItem(itemId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes an Item
 * @param  {String}   itemId   Item ID to delete  <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid">Read More</a>
 * @param  {Function} callback
 */
exports.deleteItem = function deleteItem(itemId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/${itemId}`), callback);
}

/**
 * Uploads an Item image. This function is intended to use url based references but could be updated to use file system images. If requested,
 * it could also automatically generate the image extension via something like GraphicsMagick/ImageMagick
 * <a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">Read More</a>
 * @param  {String}   itemId         Item ID to upload image for
 * @param  {String}   imageUrl       Image URL path
 * @param  {String}   imageExtension Image Extension
 * @param  {Function} callback
 */
exports.uploadItemImage = function uploadItemImage(itemId, imageUrl, imageExtension, callback) {
  var rawRequest = require('request').defaults({ encoding: null });
  var uri = `v1/${this.locationId}/items/${itemId}/image`;

  rawRequest.get(imageUrl, (err, response, body) => {
    if (err) {
      return callback(err);
    }

    var formData = {
      image_data: {
        value:  body,
        options: {
          filename: imageUrl,
          contentType: `image/${imageExtension}`
        }
      }
    };

    var headers = {
      Authorization: `Bearer ${this.accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data; boundary=BOUNDARY',
      'Content-Disposition': `form-data; name=image_data; filename=${imageUrl}`
    };

    var opts = {
      method: 'POST',
      uri: `${API_HOST}/${uri}`,
      headers: headers,
      formData: formData
    };

    rawRequest(opts, (err, response, body) => {
      if (err) {
        return callback(err);
      }

      if (response.statusCode !== 200) {
        return this.handleError(response, body, callback);
      }

      callback(null, body);
    });
  });
}

// ----------------------------------------------------------
//    Inventory methods
// ----------------------------------------------------------

/**
 * List Inventory of Items & Variations based on Location Id
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-inventory">Properties</a>
 * @param  {Function} callback
 */
exports.listInventory = function listInventory(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/inventory${queryString}`), callback);
}

/**
 * Adjusts inventory for a variation
 * @param  {String}   variationId - variation Id to adjust/update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-inventory-variationid">Properties</a>
 * @param  {Function} callback
 */
exports.adjustInventory = function adjustInventory(variationId, data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/inventory/${this.variationId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Category methods
// ----------------------------------------------------------

/**
 * list Categories based on location ID
 * @param  {Function} callback - <a href="https://docs.connect.squareup.com/api/connect/v1/#get-categories">Read More</a>
 */
exports.listCategories = function listCategories(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/categories`), callback);
}

/**
 * Creates a Category
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-categories">Properties</a>
 * @param  {Function} callback
 */
exports.createCategory = function createCategory(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/categories`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Category based on provided Category Id and Data
 * @param  {String}   categoryId - Category Id to update
 * @param  {Object}   data       <a href="https://docs.connect.squareup.com/api/connect/v1/#put-categoryid">Properties</a>
 * @param  {Function} callback
 */
exports.updateCategory = function updateCategory(categoryId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${locationId}/categories/${categoryId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Category
 * @param  {String}   categoryId  - category ID to delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-categoryid">Read More</a>
 * @param  {Function} callback
 */
exports.deleteCategory = function deleteCategory(categoryId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/categories/${categoryId}`), callback);
}

// ----------------------------------------------------------
//    Variation methods
// ----------------------------------------------------------

/**
 * Creates a Variation for an already created Item
 * @param  {String}   itemId   Item ID to create the Variation for
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-variations">Properties</a>
 * @param  {Function} callback
 */
exports.createVariation = function createVariation(itemId, data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/items/${itemId}/variations`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Variation for an already created Item and Variation
 * @param  {String}   itemId   Item ID for referencing child Variation
 * @param  {String}   variationId   Variation ID to update the Variation for
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-variationid">Properties</a>
 * @param  {Function} callback
 */
exports.updateVariation = function updateVariation(itemId, variationId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}/variations/${variationId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Variation for an Item
 * @param  {String}   itemId      Item ID for referencing child Variation
 * @param  {String}   variationId Variation ID to Delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-variationid">Read More</a>
 * @param  {Function} callback
 */
exports.deleteVariation = function deleteVariation(itemId, variationId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/{itemId}/variations/${variationId}`), callback);
}

// ----------------------------------------------------------
//    Bank Account Methods
// ----------------------------------------------------------

/**
 * Lists Bank Accounts for an Instance
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccounts">Read More</a>
 */
exports.listBankAccounts = function listBankAccounts(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/bank-accounts`), callback);
}

/**
 * Fetches a Bank Account based on Id
 * @param  {String}   bankAccountId <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccountid">Read More</a>
 * @param  {Function} callback
 */
exports.getBankAccount = function getBankAccount(bankAccountId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/bank-accounts/${bankAccountId}`), callback);
}

// ----------------------------------------------------------
//    Payment Methods
// ----------------------------------------------------------

/**
 * lists payments based on instance location ID, has various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-payments">Properties</a>
 * @param  {Function} callback
 */
exports.listPayments = function listPayments(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts('GET', `/v1/${this.locationId}/payments${queryString}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

/**
 * fetches a payment based on payment ID
 * @param  {String}   paymentId payment ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-paymentid">Read More</a>
 * @param  {Function} callback
 */
exports.getPayment = function getPayment(paymentId, callback) {
  this.handleRequest(this.constructOpts('GET', `/v1/${this.locationId}/payments/${paymentId}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

// ----------------------------------------------------------
//    Timecard Methods
// ----------------------------------------------------------

const TIMECARD_ROUTE = '/v1/me/timecards';

/**
 * Lists timecards for an instance
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecards">Read More</a>
 */
exports.listTimecards = function listTimecards(callback) {
  this.handleRequest(this.constructOpts(TIMECARD_ROUTE), callback);
}

/**
 * Gets a timecard based on Timecard Id
 * @param  {String}   timecardId Timecard Id to fetch
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecardid">Read More</a>
 */
exports.getTimecard = function getTimecard(timecardId, callback) {
  this.handleRequest(this.constructOpts(`${TIMECARD_ROUTE}/${timecardId}`), callback);
}

/**
 * Creates a timecard for an employee
 * @param  {Object}   data - takes data as a key:value object <a href="https://docs.connect.squareup.com/api/connect/v1/#post-timecards">Properties</a>
 * @param  {Function} callback
 */
exports.createTimecard = function createTimecard(data, callback) {
  var opts = this.constructOpts('POST', TIMECARD_ROUTE);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a timecard, takes in Timecard Id and Data Object
 * @param  {String}   timecardId - Timecard Id to update
 * @param  {Object}   data       <a href="https://docs.connect.squareup.com/api/connect/v1/#put-timecardid">Properties</a>
 * @param  {Function} callback
 */
exports.updateTimecard = function updateTimecard(timecardId, data, callback) {
  var opts = this.constructOpts('PUT', `${TIMECARD_ROUTE}/${timecardId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a timecard
 * @param  {String}   timecardId - Id of Timecard to delete
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-timecardid">Read More</a>
 */
exports.deleteTimecard = function deleteTimecard(timecardId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `${TIMECARD_ROUTE}/${timecardId}`), callback);
}

/**
 * Lists all known events for a timecard
 * @param  {String}   timecardId - Id of timecard to look up
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-events">Read More</a>
 */
exports.listTimecardEvents = function listTimecardEvents(timecardId, callback) {
  this.handleRequest(this.constructOpts(`${TIMECARD_ROUTE}/${timecardId}/events`), callback);
}

// ----------------------------------------------------------
//    Drawer Shift Methods
// ----------------------------------------------------------

/**
 * Lists all Cash Drawer Shifts for an instance, takes optional parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershifts">Properties</a>
 * @param  {Function} callback
 */
exports.listCashDrawerShifts = function listCashDrawerShifts(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/cash-drawer-shifts${queryString}`), callback);
}

/**
 * Gets Cash Drawer Details for a provided Shift Id
 * @param  {String}   shiftId  Shift Id to fetch
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershiftid">Read More</a>
 */
exports.getCashDrawerShift = function getCashDrawerShift(shiftId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/cash-drawer-shifts/${shiftId}`), callback);
}

// ----------------------------------------------------------
//    Settlement Methods
// ----------------------------------------------------------

/**
 * lists Settlements based on instance location ID, has various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlements">Properties</a>
 * @param  {Function} callback
 */
exports.listSettlements = function listSettlements(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/settlements`), callback);
}

/**
 * Fetches a Settlement based on Id
 * @param  {String}   settlementId - Settlement Id to Fetch
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlementid">Read More</a>
 */
exports.getSettlement = function getSettlement(settlementId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/settlements/${settlementId}`), callback);
}

// ----------------------------------------------------------
//    Refund Methods
// ----------------------------------------------------------

/**
 * lists Refunds based on instance location ID, has various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v1/#get-refunds">Properties</a>
 * @param  {Function} callback
 */
exports.listRefunds = function listRefunds(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 1:
      queryParams = null;
  }

  var queryString = constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/refunds`), callback);
}

/**
 * Creates a refund
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-refunds">Properties</a>
 * @param  {Function} callback
 */
exports.createRefund = function createRefund(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/refunds`);
  opts.json = data;
  this.handleRequest(opts, callback);
}
