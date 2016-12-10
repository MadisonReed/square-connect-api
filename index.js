const request = require('request');
const cheerio = require('cheerio');
const API_HOST = 'https://connect.squareup.com';

/* **********************************************************
 *     EXPORTS
 ************************************************************ */
 module.exports = SquareConnect;

 function SquareConnect(locationId, accessToken, extendedDebugInfo = false) {
   this.locationId = locationId;
   this.accessToken = accessToken;
   this.extendedDebugInfo = extendedDebugInfo;
   return this;
 }

/* **********************************************************
 *     PUBLIC METHODS
 ************************************************************ */

SquareConnect.prototype.constructOpts = constructOpts;
SquareConnect.prototype.handleRequest = handleRequest;
SquareConnect.prototype.handleError = handleError;

SquareConnect.prototype.getMerchantProfile = getMerchantProfile;

SquareConnect.prototype.listCustomers = listCustomers;
SquareConnect.prototype.getCustomer = getCustomer;

SquareConnect.prototype.listEmployees = listEmployees;
SquareConnect.prototype.listRoles = listRoles;
SquareConnect.prototype.createEmployeeFromUser = createEmployeeFromUser;
SquareConnect.prototype.updateEmployee = updateEmployee;

SquareConnect.prototype.listItems = listItems;
SquareConnect.prototype.getItem = getItem;
SquareConnect.prototype.createItem = createItem;
SquareConnect.prototype.updateItem = updateItem;
SquareConnect.prototype.deleteItem = deleteItem;

SquareConnect.prototype.createVariation = createVariation;
SquareConnect.prototype.updateVariation = updateVariation;

SquareConnect.prototype.listInventory = listInventory;
SquareConnect.prototype.uploadItemImage = uploadItemImage;

SquareConnect.prototype.listCategories = listCategories;
SquareConnect.prototype.createCategory = createCategory;
SquareConnect.prototype.deleteCategory = deleteCategory;

SquareConnect.prototype.listTransactions = listTransactions;
SquareConnect.prototype.getTransaction = getTransaction;

SquareConnect.prototype.listPayments = listPayments;
SquareConnect.prototype.getPayment = getPayment;

SquareConnect.prototype.getCustomerInfoFromReceipt = getCustomerInfoFromReceipt;

function getMerchantProfile(callback) {
  this.handleRequest(this.constructOpts('GET', '/v1/me'), callback);
}

// ----------------------------------------------------------
//    Role Methods
// ----------------------------------------------------------
function listRoles(callback) {
  this.handleRequest(this.constructOpts('/v1/me/roles'), callback);
}

// ----------------------------------------------------------
//    Employee methods
// ----------------------------------------------------------
function listEmployees(storeCode, callback) {
  this.handleRequest(this.constructOpts('GET','/v1/me/employees'), callback);
}

function createEmployeeFromUser(data, callback) {
  var opts = this.constructOpts('POST', '/v1/me/employees');
  opts.json = data;
  this.handleRequest(opts, callback);
}

function updateEmployee(squareEmployeeId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/me/employees/${squareEmployeeId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Inventory methods
// ----------------------------------------------------------
function listItems(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/items`), callback);
}

function listInventory(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/inventory`), callback);
}

function listCategories(callback) {
  this.handleRequest(this.constructOpts(`/v1/${this.locationId}/categories`), callback);
}

function createCategory(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/categories`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

function deleteCategory(categoryId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/categories/${categoryId}`), callback);
}

function createItem(data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/items`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

function getItem(itemId, callback) {
  var opts = this.constructOpts(`/v1/${this.locationId}/items/${itemId}`);
  this.handleRequest(opts, callback);
}

function updateItem(itemId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

function deleteItem(itemId, callback) {
  this.handleRequest(this.constructOpts('DELETE', `/v1/${this.locationId}/items/${itemId}`), callback);
}

function createVariation(itemId, data, callback) {
  var opts = this.constructOpts('POST', `/v1/${this.locationId}/items/${itemId}/variations`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

function updateVariation(itemId, variationId, data, callback) {
  var opts = this.constructOpts('PUT', `/v1/${this.locationId}/items/${itemId}/variations/${variationId}`);
  opts.json = data;
  this.handleRequest(opts, callback);
}

function uploadItemImage(itemId, imageUrl, imageExtension, callback) {
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
//    Customer Methods
// ----------------------------------------------------------

function listCustomers(callback) {
  this.handleRequest(this.constructOpts('GET', '/v2/customers'), callback);
}

function getCustomer(customerId, callback) {
  var opts = this.constructOpts(`/v2/customers/${this.customerId}`);
  this.handleRequest(opts, callback);
}

// ----------------------------------------------------------
//    Transaction & Payment Methods
// ----------------------------------------------------------

function listTransactions(params, callback) {
  callback = Array.prototype.pop.call(arguments);

  switch (arguments.length) {
    case 1:
      params = null;
  }

  var queryString = '';

  if (params) {
    queryString = constructQueryString(params);
  }

  this.handleRequest(this.constructOpts('GET', `/v2/locations/${this.locationId}/transactions${queryString}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result.transactions);
  });
}

function getTransaction(transactionId, callback) {
  this.handleRequest(this.constructOpts('GET', `/v2/locations/${this.locationId}/transactions/${transactionId}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result.transaction);
  });
}

function listPayments(params, callback) {
  callback = Array.prototype.pop.call(arguments);

  switch (arguments.length) {
    case 1:
      params = null;
  }

  var queryString = '';

  if (params) {
    queryString = constructQueryString(params);
  }

  this.handleRequest(this.constructOpts('GET', `/v1/${this.locationId}/payments${queryString}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

function getPayment(paymentId, callback) {
  this.handleRequest(this.constructOpts('GET', `/v1/${this.locationId}/payments/${paymentId}`), (err, result) => {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

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

    var sqReceiptInfo = stripCustomerFromBody(body);
    callback(null, sqReceiptInfo);
  });
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

///////////////////////////// HELPER METHODS ///////////////////////////////////
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
