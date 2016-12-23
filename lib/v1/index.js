const fs = require('fs');
const async = require('async');
const gm = require('gm');

const UTILS = require('../utils');
const API_HOST = UTILS.API_HOST;

const SquareConnect = require('../SquareConnect');

/* **********************************************************
 *    API V1
 ************************************************************ */

// ----------------------------------------------------------
//    Main Merchant Methods
// ----------------------------------------------------------

const MERCHANT_ROUTE = '/v1/me';

/**
 * Returns known Square Data for Merchant based on Auth Token
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-merchantid">Read More</a>
 */
SquareConnect.prototype.getMerchantProfile = function getMerchantProfile(callback) {
  this.handleRequest(this.constructOpts(MERCHANT_ROUTE), callback);
}

/**
 * Returns a list of all locations for this merchant
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-locations">Read More</a>
 */
SquareConnect.prototype.listLocations = function listLocations(callback) {
  this.handleRequest(this.constructOpts(`${MERCHANT_ROUTE}/locations`), callback);
}

// ----------------------------------------------------------
//    Role Methods
// ----------------------------------------------------------

const ROLE_ROUTE = '/v1/me/roles';

/**
 * Returns known Square Roles for Merchant based on Instance Auth Token
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roles">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listRoles = function listRoles(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`${ROLE_ROUTE}${queryString}`), callback);
}

/**
 * Returns a role, queried by Id
 * @param  {String}   roleId - Id of role to query <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roleid">Read More</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.getRole = function getRole(roleId, callback) {
  this.handleRequest(this.constructOpts(`${ROLE_ROUTE}/${roleId}`), callback);
}

/**
 * Creates a Role
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-roles">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createRole = function createRole(data, callback) {
  this.handleRequest(this.constructOpts('POST', ROLE_ROUTE), callback);
}

/**
 * Updates a Role based on roleId and provided data
 * @param  {String}   roleId   Role Id to Update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-roleid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateRole = function updateRole(roleId, data, callback) {
  this.handleRequest(this.constructOpts('PUT', `${ROLE_ROUTE}/${roleId}`), callback);
}

// ----------------------------------------------------------
//    Employee methods
// ----------------------------------------------------------

/**
 * Returns Employees based on Instance Location Id
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employees">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listEmployees = function listEmployees(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`${MERCHANT_ROUTE}/employees${queryString}`), callback);
}

/**
 * Returns and Employee by employee Id
 * @param  {String}   employeeId - Employee Id to Fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employeeid">Read More</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.getEmployee = function getEmployee(employeeId, callback) {
  this.handleRequest(this.constructOpts(`${MERCHANT_ROUTE}/${employeeId}`), callback);
}

/**
 * Creates an employee
 * @param  {Object} data <a href="https://docs.connect.squareup.com/api/connect/v1/#post-employees">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createEmployee = function createEmployee(data, callback) {
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
SquareConnect.prototype.updateEmployee = function updateEmployee(squareEmployeeId, data, callback) {
  var opts = this.constructOpts('PUT', `${MERCHANT_ROUTE}/employees/${squareEmployeeId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Timecard Methods
// ----------------------------------------------------------

const TIMECARD_ROUTE = '/v1/me/timecards';

/**
 * Lists timecards for an instance
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecards">Read More</a>
 */
SquareConnect.prototype.listTimecards = function listTimecards(callback) {
  this.handleRequest(this.constructOpts(TIMECARD_ROUTE), callback);
}

/**
 * Gets a timecard based on Timecard Id
 * @param  {String}   timecardId Timecard Id to fetch
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecardid">Read More</a>
 */
SquareConnect.prototype.getTimecard = function getTimecard(timecardId, callback) {
  this.handleRequest(this.constructOpts(`${TIMECARD_ROUTE}/${timecardId}`), callback);
}

/**
 * Creates a timecard for an employee
 * @param  {Object}   data - takes data as a key:value object <a href="https://docs.connect.squareup.com/api/connect/v1/#post-timecards">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createTimecard = function createTimecard(data, callback) {
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
SquareConnect.prototype.updateTimecard = function updateTimecard(timecardId, data, callback) {
  var opts = this.constructOpts('PUT', `${TIMECARD_ROUTE}/${timecardId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a timecard
 * @param  {String}   timecardId - Id of Timecard to delete
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-timecardid">Read More</a>
 */
SquareConnect.prototype.deleteTimecard = function deleteTimecard(timecardId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `${TIMECARD_ROUTE}/${timecardId}`), callback);
}

/**
 * Lists all known events for a timecard
 * @param  {String}   timecardId - Id of timecard to look up
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-events">Read More</a>
 */
SquareConnect.prototype.listTimecardEvents = function listTimecardEvents(timecardId, callback) {
  this.handleRequest(this.constructOpts(`${TIMECARD_ROUTE}/${timecardId}/events`), callback);
}

// ----------------------------------------------------------
//    Drawer Shift Methods
// ----------------------------------------------------------

/**
 * Lists all Cash Drawer Shifts for an instance, takes optional parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershifts">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listCashDrawerShifts = function listCashDrawerShifts(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/cash-drawer-shifts${queryString}`), callback);
}

/**
 * Gets Cash Drawer Details for a provided Shift Id
 * @param  {String}   shiftId  Shift Id to fetch
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershiftid">Read More</a>
 */
SquareConnect.prototype.getCashDrawerShift = function getCashDrawerShift(shiftId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/cash-drawer-shifts/${shiftId}`), callback);
}

// ----------------------------------------------------------
//    Item methods
// ----------------------------------------------------------

/**
 * list Items based on location ID
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-items">Read More</a>
 */
SquareConnect.prototype.listItems = function listItems(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/items`), callback);
}

/**
 * Creates an Item
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-items">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createItem = function createItem(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/items`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Fetches an Item based on Item ID
 * @param  {String}   itemId   item ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-itemid">Read More</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.getItem = function getItem(itemId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/items/${itemId}`), callback);
}

/**
 * Updates an Item
 * @param  {String}   itemId   Item ID to update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateItem = function updateItem(itemId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes an Item
 * @param  {String}   itemId   Item ID to delete  <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid">Read More</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.deleteItem = function deleteItem(itemId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/${itemId}`), callback);
}

/**
 * Uploads an Item image. This function takes both url or file syste based locations. It will automatically generate the buffer and file extension data necessary for the Connect API
 * @param  {String}   itemId           - Item Id to to receive the uploaded Image
 * @param  {String}   imageLocation    - Image URL or file system path
 * @param  {String}   [fileName]       - Optional fileName to provide when uploading, if not included, a filename will be parsed from the imageLocation
 * @param  {Function} callback         - <a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">Read More</a>
 */
SquareConnect.prototype.uploadItemImage = function uploadItemImage(itemId, imageLocation, fileName, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 2:
      fileName = null;
  }

  const rawRequest = require('request').defaults({ encoding: null });
  var uri = `v1/${this.locationId}/items/${itemId}/image`;
  var isLocal = false;

  async.auto({
    checkLocal: cb => {
      if (!fs.existsSync(imageLocation)) {
        return cb();
      }

      isLocal = true;
      fs.readFile(imageLocation, cb);
    },
    checkHttp: ['checkLocal', (results, cb) => {
      if (isLocal) {
        return cb();
      }

      rawRequest.get(imageLocation, (err, response, body) => {
        if (err) {
          return cb(err);
        }

        if (response.statusCode !== 200 ) {
          return this.handleError(response, body, cb);
        }

        cb(null, body);
      });
    }],
    identify: ['checkHttp', (results, cb) => {
      var imageBuffer = (results.checkLocal || results.checkHttp);

      gm(imageBuffer).identify((err, data) => {
        if (err) {
          return cb(err);
        }

        var res = {
          imageBuffer,
          imageData: data
        };

        cb(null, res);
      });
    }],
    upload: ['identify', (results, cb) => {
      var { imageData } = results.identify;
      var { imageBuffer } = results.identify;
      var { format } = imageData;

      var formattedName = imageLocation.match(/[^/\\&\?]+\.\w{3,4}(?=([\?&].*$|$))/);
      if (formattedName[0]) {

        formattedName = formattedName[0];
        let idx = formattedName.lastIndexOf('.');

        if (idx) {
          formattedName = formattedName.slice(0, idx);
        }
      }

      var uploadName = fileName ? fileName : formattedName;
      imageData.uploadName = uploadName;

      var formData = {
        image_data: {
          value:  imageBuffer,
          options: {
            filename: uploadName,
            contentType: `image/${format}`
          }
        }
      };

      var headers = {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'User-Agent': 'square-connect-api',
        'Content-Type': 'multipart/form-data; boundary=BOUNDARY',
        'Content-Disposition': `form-data; name=image_data; filename=${uploadName}`
      };

      var opts = {
        method: 'POST',
        uri: `${API_HOST}/${uri}`,
        headers: headers,
        formData: formData
      };

      this.handleRequest(opts, rawRequest, (err, body) => {
        if (err) {
          return cb(err);
        }

        var response = {
          imageData,
          body
        };

        cb(null, response);
      });
    }]
  }, (err, results) => {
    if (err) {
      return callback(err);
    }

    callback(null, results.upload);
  });
}

// ----------------------------------------------------------
//    Inventory methods
// ----------------------------------------------------------

/**
 * List Inventory of Items & Variations based on Location Id
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-inventory">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listInventory = function listInventory(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/inventory${queryString}`), callback);
}

/**
 * Adjusts inventory for a variation
 * @param  {String}   variationId - variation Id to adjust/update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-inventory-variationid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.adjustInventory = function adjustInventory(variationId, data, callback) {
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
SquareConnect.prototype.listCategories = function listCategories(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/categories`), callback);
}

/**
 * Creates a Category
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-categories">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createCategory = function createCategory(data, callback) {
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
SquareConnect.prototype.updateCategory = function updateCategory(categoryId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/categories/${categoryId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Category
 * @param  {String}   categoryId  - category ID to delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-categoryid">Read More</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.deleteCategory = function deleteCategory(categoryId, callback) {
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
SquareConnect.prototype.createVariation = function createVariation(itemId, data, callback) {
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
SquareConnect.prototype.updateVariation = function updateVariation(itemId, variationId, data, callback) {
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
SquareConnect.prototype.deleteVariation = function deleteVariation(itemId, variationId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/{itemId}/variations/${variationId}`), callback);
}

// ----------------------------------------------------------
//    Order Methods
// ----------------------------------------------------------

/**
 * Lists orders for an instance, takes various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-orders">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listOrders = function listOrders(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/orders${queryString}`), callback);
}

/**
 * Fetches an Order based on Order Id
 * @param  {String}   orderId  - Order Id to fetch
 * @param  {Function} callback
 */
SquareConnect.prototype.getOrder = function getOrder(orderId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/orders/${orderId}`), callback);
}

/**
 * Updates an order based on Order Id and provided Data
 * @param  {String}   orderId  - Order Id to Update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-orderid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateOrder = function updateOrder(orderId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/orders/${orderId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Bank Account Methods
// ----------------------------------------------------------

/**
 * Lists Bank Accounts for an Instance
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccounts">Read More</a>
 */
SquareConnect.prototype.listBankAccounts = function listBankAccounts(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/bank-accounts`), callback);
}

/**
 * Fetches a Bank Account based on Id
 * @param  {String}   bankAccountId <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccountid">Read More</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.getBankAccount = function getBankAccount(bankAccountId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/bank-accounts/${bankAccountId}`), callback);
}

// ----------------------------------------------------------
//    Payment Methods
// ----------------------------------------------------------

/**
 * lists payments based on instance location ID, has various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-payments">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listPayments = function listPayments(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
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
SquareConnect.prototype.getPayment = function getPayment(paymentId, callback) {
  this.handleRequest(this.constructOpts('GET', `/v1/${this.locationId}/payments/${paymentId}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

// ----------------------------------------------------------
//    Settlement Methods
// ----------------------------------------------------------

/**
 * lists Settlements based on instance location ID, has various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlements">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listSettlements = function listSettlements(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/settlements${queryString}`), callback);
}

/**
 * Fetches a Settlement based on Id
 * @param  {String}   settlementId - Settlement Id to Fetch
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlementid">Read More</a>
 */
SquareConnect.prototype.getSettlement = function getSettlement(settlementId, callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/settlements/${settlementId}`), callback);
}

// ----------------------------------------------------------
//    Refund Methods
// ----------------------------------------------------------

/**
 * lists Refunds based on instance location ID, has various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-refunds">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listRefunds = function listRefunds(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/refunds${queryString}`), callback);
}

/**
 * Creates a refund
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-refunds">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createRefund = function createRefund(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/refunds`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Discount Methods
// ----------------------------------------------------------

/**
 * Lists Discounts for an instance location, takes various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-discounts">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listDiscounts = function listDiscounts(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/discounts${queryString}`), callback);
}

/**
 * Creates a Discount for a location based on provided data
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-discounts">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createDiscount = function createDiscount(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/discounts`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Discount based on provided Discount Id and data
 * @param  {String}   discountId - Discount Id to Update
 * @param  {Object}   data       <a href="https://docs.connect.squareup.com/api/connect/v1/#put-discountid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateDiscount = function updateDiscount(discountId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/discounts/${discountId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Discount based on provided Discount Id
 * @param  {String}   discountId - Discount Id to delete
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-discountid">Read More</a>
 */
SquareConnect.prototype.deleteDiscount = function deleteDiscount(discountId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/discounts/${discountId}`), callback);
}

// ----------------------------------------------------------
//    Fee Methods
// ----------------------------------------------------------

const FEED_URL = function(locationId, ext = '') {
  return `/v1/${locationId}/fees${ext}`;
}

/**
 * Lists Fees for an instance location, takes various query parameters
 * @param  {Object}   [queryParams] takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-fees">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.listFees = function listFees(queryParams, callback) {
  callback = Array.prototype.pop.call(arguments);
  switch (arguments.length) {
    case 0:
      queryParams = null;
  }

  var queryString = UTILS.constructQueryString(queryParams);
  this.handleRequest(this.constructOpts(FEED_URL(this.locationId, queryString)), callback);
}

/**
 * Creates a Fee for a location based on provided data
 * @param  {Object}   data  <a href="https://docs.connect.squareup.com/api/connect/v1/#post-fees">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createFee = function createFee(data, callback) {
  var opts = this.constructOpts('POST', FEED_URL(this.locationId));
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Fee based on provided Fee Id and data
 * @param  {String}   feeId    - Fee Id to Update
 * @param  {Object}   data     - <a href="https://docs.connect.squareup.com/api/connect/v1/#put-feeid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateFee = function updateFee(feeId, data, callback) {
  var opts = this.constructOpts('PUT', FEED_URL(this.locationId, `/${feeId}`));
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Fee based on provided Fee Id
 * @param  {String}   feeId    - Fee Id to Delete
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-feeid">Read More</a>
 */
SquareConnect.prototype.deleteFee = function deleteFee(feeId, callback) {
  this.handleRequest(this.constructOpts('DELETE', FEED_URL(this.locationId, `/${feeId}`)), callback);
}

/**
 * Applies a Fee to an Item based on provided Fee and Item Ids
 * @param  {String}   feeId    - Fee Id to apply
 * @param  {String}   itemId   - Item Id that will receive the Fee
 * @param  {Function} callback - <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid-feeid">Read More</a>
 */
SquareConnect.prototype.applyFee = function applyFee(feeId, itemId, callback) {
  this.handleRequest(this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}/fees/${feeId}`), callback);
}

/**
 * Removes a Fee from an Item based on provided Fee and Item Id's
 * @param  {String}   feeId    - Fee Id to remove
 * @param  {String}   itemId   - Item Id to remove the Fee from
 * @param  {Function} callback - <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid-feeid">Read More</a>
 */
SquareConnect.prototype.removeFee = function removeFee(feeId, itemId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/${itemId}/fees/${feeId}`), callback);
}


// ------------------------------------------------------------------------------------------------------------------------------------
//                                                          Modifier Methods
// ------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------
//    Modifier List Methods
// ----------------------------------------------------------

const MOD_LIST_URL = function(locationId, ext = '') {
  return `/v1/${locationId}/modifier-lists${ext}`;
}

/**
 * Lists Modifier Lists for an instance location
 * @param  {Function} callback - <a href="https://docs.connect.squareup.com/api/connect/v1/#get-modifierlists">Read More</a>
 */
SquareConnect.prototype.listModifierLists = function listModifierLists(callback) {
  this.handleRequest(this.constructOpts(MOD_LIST_URL(this.locationId)), callback);
}

/**
 * Fetches a Modifier List based on provided Modifer List Id
 * @param  {String}   modifierListId - Modifier List Id to Fetch
 * @param  {Function} callback       - <a href="https://docs.connect.squareup.com/api/connect/v1/#get-modifierlistid">Read More</a>
 */
SquareConnect.prototype.getModifierList = function getModifierList(modifierListId, callback) {
  this.handleRequest(this.constructOpts(MOD_LIST_URL(this.locationId, `/${modifierListId}`)), callback);
}

/**
 * Creates a Modifer List based on provided Data
 * @param  {Object}   data     - <a href="https://docs.connect.squareup.com/api/connect/v1/#post-modifierlists">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createModifierList = function createModifierList(data, callback) {
  var opts = this.constructOpts('POST', MOD_LIST_URL(this.locationId));
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Modifer List based on provided Modifier List Id and Data
 * @param  {String}   modifierListId - Modifier List Id to Update
 * @param  {Object}   data           - <a href="https://docs.connect.squareup.com/api/connect/v1/#put-modifierlistid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateModifierList = function updateModifierList(modifierListId, data, callback) {
  var opts = this.constructOpts('PUT', MOD_LIST_URL(this.locationId, `/${modifierListId}`));
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Modifier List based on provided Modifier List Id
 * @param  {String}   modifierListId - Modifier List Id to Delete
 * @param  {Function} callback
 */
SquareConnect.prototype.deleteModifierList = function deleteModifierList(modifierListId, callback) {
  this.handleRequest(this.constructOpts('DELETE', MOD_LIST_URL(this.locationId, `/${modifierListId}`)), callback);
}

/**
 * Applies a Modifier List to an Item based on provided Modifier List Id and Item Id
 * @param  {String}   modifierListId - Modifier List Id to Apply
 * @param  {String}   itemId         - Item Id to recieve the Modifier List
 * @param  {Function} callback
 */
SquareConnect.prototype.applyModifierList = function applyModifierList(modifierListId, itemId, callback) {
  this.handleRequest(this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}/modifier-lists/${modifierListId}`), callback);
}

/**
 * Removes a Modifier List from an Item based on provided Modifier List Id and Item Id
 * @param  {String}   modifierListId - Modifier List Id to Remove
 * @param  {String}   itemId         - Item Id to remove the Modifier List from
 * @param  {Function} callback
 */
SquareConnect.prototype.removeModifierList = function removeModifierList(modifierListId, itemId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/${itemId}/modifier-lists/${modifierListId}`), callback);
}

// ----------------------------------------------------------
//    Modifier Option Methods
// ----------------------------------------------------------

const MOD_OPT_URL = function(locationId, modifierListId, extension = '') {
  return `/v1/${locationId}/modifier-lists/${modifierListId}/modifier-options${extension}`;
}
/**
 * Creates a new Modifier Option for a Modifier List
 * @param  {String}   modifierListId   Modifier List Id to Create a new Option for
 * @param  {Object}   data             <a href="https://docs.connect.squareup.com/api/connect/v1/#post-modifieroptions">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createModifierOption = function createModifierOption(modifierListId, data, callback) {
  var opts = this.constructOpts('POST', MOD_OPT_URL(this.locationId, modifierListId));
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Modifier Option based on Id and Provided Data
 * @param  {String}   modifierListId   - Modifier List Id to Update
 * @param  {String}   modifierOptionId - Modifier Optioin Id to Update
 * @param  {Object}   data             <a href="https://docs.connect.squareup.com/api/connect/v1/#put-modifieroptionid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateModifierOption = function updateModifierOption(modifierListId, modifierOptionId, data, callback) {
  var opts = this.constructOpts('PUT', MOD_OPT_URL(this.locationId, modifierListId, `/${modifierOptionId}`));
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Modfiier Option based on provided Id
 * @param  {String}   modifierListId   - Modifier List Id to Modify
 * @param  {String}   modifierOptionId - Modifier Option Id to Delete
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-modifieroptionid">Read More</a>
 */
SquareConnect.prototype.deleteModifierOption = function deleteModifierOption(modifierListId, modifierOptionId, callback) {
  this.handleRequest(this.constructOpts('DELETE', MOD_OPT_URL(this.locationId, modifierListId, `/${modifierOptionId}`)), callback);
}

// ------------------------------------------------------------------------------------------------------------------------------------
//                                                          Kiosk UI Methods
// ------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------
//    Page Methods
// ----------------------------------------------------------

/**
 * Lists all pages for an Instace Location
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#get-pages">Read More</a>
 */
SquareConnect.prototype.listPages = function listPages(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/pages`), callback);
}

/**
 * Creates a new Page with provided Data
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#post-pages">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.createPage = function createPage(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/pages`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Updates a Page based on provided Page Id and Data
 * @param  {String}   pageId   Page Id to Update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-pageid">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updatePage = function updatePage(pageId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/pages/${pageId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Deletes a Page based on provided Page Id
 * @param  {String}   pageId   Page Id to Delete
 * @param  {Function} callback <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-pageid">Read More</a>
 */
SquareConnect.prototype.deletePage = function deletePage(pageId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/pages/${pageId}`), callback);
}

// ----------------------------------------------------------
//    Cell Methods
// ----------------------------------------------------------

/**
 * Updates Cell Structure for a provided Page Id
 * @param  {String}   pageId   - Page Id to Update
 * @param  {Object}   data     <a href="https://docs.connect.squareup.com/api/connect/v1/#put-cells">Properties</a>
 * @param  {Function} callback
 */
SquareConnect.prototype.updateCell = function updateCells(pageId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/pages/${pageId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

/**
 * Delete all Cells on a page for provided Page Id
 * @param  {String}   pageId   - Page Id to Delete cells from
 * @param  {Function} callback
 */
SquareConnect.prototype.deleteCell = function deleteCells(pageId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/pages/${pageId}`), callback);
}
