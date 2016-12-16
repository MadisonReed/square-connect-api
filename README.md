#Square Connect Node
### Instantiate a SquareConnect client with the main export below, each instance method takes a callback with standard (err, response) protocol
---------------------

## Functions

<dl>
<dt><a href="#SquareConnect">SquareConnect(locationId, accessToken, [extendedDebugInfo])</a></dt>
<dd><p>Main Export, instantiates a Square Client</p>
</dd>
<dt><a href="#getMerchantProfile">getMerchantProfile(callback)</a></dt>
<dd><p>Returns known Square Data for Merchant based on Auth Token</p>
</dd>
<dt><a href="#listLocations">listLocations(callback)</a></dt>
<dd><p>Returns a list of all locations for this merchant</p>
</dd>
<dt><a href="#listRoles">listRoles([queryParams], callback)</a></dt>
<dd><p>Returns known Square Roles for Merchant based on Instance Auth Token</p>
</dd>
<dt><a href="#getRole">getRole(roleId, callback)</a></dt>
<dd><p>Returns a role, queried by Id</p>
</dd>
<dt><a href="#createRole">createRole(data, callback)</a></dt>
<dd><p>Creates a Role</p>
</dd>
<dt><a href="#updateRole">updateRole(roleId, data, callback)</a></dt>
<dd><p>Updates a Role based on roleId and provided data</p>
</dd>
<dt><a href="#listEmployees">listEmployees([queryParams], callback)</a></dt>
<dd><p>Returns Employees based on Instance Location Id</p>
</dd>
<dt><a href="#getEmployee">getEmployee(employeeId, callback)</a></dt>
<dd><p>Returns and Employee by employee Id</p>
</dd>
<dt><a href="#createEmployee">createEmployee(data, callback)</a></dt>
<dd><p>Creates an employee</p>
</dd>
<dt><a href="#updateEmployee">updateEmployee(squareEmployeeId, data, callback)</a></dt>
<dd><p>Update Employee based on employee ID</p>
</dd>
<dt><a href="#listItems">listItems(callback)</a></dt>
<dd><p>list Items based on location ID</p>
</dd>
<dt><a href="#createItem">createItem(data, callback)</a></dt>
<dd><p>Creates an Item</p>
</dd>
<dt><a href="#getItem">getItem(itemId, callback)</a></dt>
<dd><p>Fetches an Item based on Item ID</p>
</dd>
<dt><a href="#updateItem">updateItem(itemId, data, callback)</a></dt>
<dd><p>Updates an Item</p>
</dd>
<dt><a href="#deleteItem">deleteItem(itemId, callback)</a></dt>
<dd><p>Deletes an Item</p>
</dd>
<dt><a href="#uploadItemImage">uploadItemImage(itemId, imageUrl, imageExtension, callback)</a></dt>
<dd><p>Uploads an Item image. This function is intended to use url based references but could be updated to use file system images. If requested,
it could also automatically generate the image extension via something like GraphicsMagick/ImageMagick
<a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">Read More</a></p>
</dd>
<dt><a href="#listInventory">listInventory([queryParams], callback)</a></dt>
<dd><p>List Inventory of Items &amp; Variations based on Location Id</p>
</dd>
<dt><a href="#adjustInventory">adjustInventory(variationId, data, callback)</a></dt>
<dd><p>Adjusts inventory for a variation</p>
</dd>
<dt><a href="#listCategories">listCategories(callback)</a></dt>
<dd><p>list Categories based on location ID</p>
</dd>
<dt><a href="#createCategory">createCategory(data, callback)</a></dt>
<dd><p>Creates a Category</p>
</dd>
<dt><a href="#updateCategory">updateCategory(categoryId, data, callback)</a></dt>
<dd><p>Updates a Category based on provided Category Id and Data</p>
</dd>
<dt><a href="#deleteCategory">deleteCategory(categoryId, callback)</a></dt>
<dd><p>Deletes a Category</p>
</dd>
<dt><a href="#createVariation">createVariation(itemId, data, callback)</a></dt>
<dd><p>Creates a Variation for an already created Item</p>
</dd>
<dt><a href="#updateVariation">updateVariation(itemId, variationId, data, callback)</a></dt>
<dd><p>Updates a Variation for an already created Item and Variation</p>
</dd>
<dt><a href="#deleteVariation">deleteVariation(itemId, variationId, callback)</a></dt>
<dd><p>Deletes a Variation for an Item</p>
</dd>
<dt><a href="#listOrders">listOrders([queryParams], callback)</a></dt>
<dd><p>Lists orders for an instance, takes various query parameters</p>
</dd>
<dt><a href="#getOrder">getOrder(orderId, callback)</a></dt>
<dd><p>Fetches an Order based on Order Id</p>
</dd>
<dt><a href="#updateOrder">updateOrder(orderId, data, callback)</a></dt>
<dd><p>Updates an order based on Order Id and provided Data</p>
</dd>
<dt><a href="#listBankAccounts">listBankAccounts(callback)</a></dt>
<dd><p>Lists Bank Accounts for an Instance</p>
</dd>
<dt><a href="#getBankAccount">getBankAccount(bankAccountId, callback)</a></dt>
<dd><p>Fetches a Bank Account based on Id</p>
</dd>
<dt><a href="#listPayments">listPayments([queryParams], callback)</a></dt>
<dd><p>lists payments based on instance location ID, has various query parameters</p>
</dd>
<dt><a href="#getPayment">getPayment(paymentId, callback)</a></dt>
<dd><p>fetches a payment based on payment ID</p>
</dd>
<dt><a href="#listTimecards">listTimecards(callback)</a></dt>
<dd><p>Lists timecards for an instance</p>
</dd>
<dt><a href="#getTimecard">getTimecard(timecardId, callback)</a></dt>
<dd><p>Gets a timecard based on Timecard Id</p>
</dd>
<dt><a href="#createTimecard">createTimecard(data, callback)</a></dt>
<dd><p>Creates a timecard for an employee</p>
</dd>
<dt><a href="#updateTimecard">updateTimecard(timecardId, data, callback)</a></dt>
<dd><p>Updates a timecard, takes in Timecard Id and Data Object</p>
</dd>
<dt><a href="#deleteTimecard">deleteTimecard(timecardId, callback)</a></dt>
<dd><p>Deletes a timecard</p>
</dd>
<dt><a href="#listTimecardEvents">listTimecardEvents(timecardId, callback)</a></dt>
<dd><p>Lists all known events for a timecard</p>
</dd>
<dt><a href="#listCashDrawerShifts">listCashDrawerShifts([queryParams], callback)</a></dt>
<dd><p>Lists all Cash Drawer Shifts for an instance, takes optional parameters</p>
</dd>
<dt><a href="#getCashDrawerShift">getCashDrawerShift(shiftId, callback)</a></dt>
<dd><p>Gets Cash Drawer Details for a provided Shift Id</p>
</dd>
<dt><a href="#listSettlements">listSettlements([queryParams], callback)</a></dt>
<dd><p>lists Settlements based on instance location ID, has various query parameters</p>
</dd>
<dt><a href="#getSettlement">getSettlement(settlementId, callback)</a></dt>
<dd><p>Fetches a Settlement based on Id</p>
</dd>
<dt><a href="#listRefunds">listRefunds([queryParams], callback)</a></dt>
<dd><p>lists Refunds based on instance location ID, has various query parameters</p>
</dd>
<dt><a href="#createRefund">createRefund(data, callback)</a></dt>
<dd><p>Creates a refund</p>
</dd>
<dt><a href="#listPages">listPages(callback)</a></dt>
<dd><p>Lists all pages for an Instace Location</p>
</dd>
<dt><a href="#createPage">createPage(data, callback)</a></dt>
<dd><p>Creates a new Page with provided Data</p>
</dd>
<dt><a href="#updatePage">updatePage(pageId, data, callback)</a></dt>
<dd><p>Updates a Page based on provided Page Id and Data</p>
</dd>
<dt><a href="#deletePage">deletePage(pageId, callback)</a></dt>
<dd><p>Deletes a Page based on provided Page Id</p>
</dd>
<dt><a href="#updateCell">updateCell(pageId, data, callback)</a></dt>
<dd><p>Updates Cell Structure for a provided Page Id</p>
</dd>
<dt><a href="#deleteCell">deleteCell(pageId, callback)</a></dt>
<dd><p>Delete all Cells on a page for provided Page Id</p>
</dd>
<dt><a href="#v2listLocations">v2listLocations(callback)</a></dt>
<dd><p>Lists Locations for the Square Connect API V2</p>
</dd>
<dt><a href="#listCustomers">listCustomers([queryParams], callback)</a></dt>
<dd><p>Lists Customers via instance Auth Token</p>
</dd>
<dt><a href="#getCustomer">getCustomer(customerId, callback)</a></dt>
<dd><p>Fetches a customer based on Customer ID</p>
</dd>
<dt><a href="#createCustomer">createCustomer(data, callback)</a></dt>
<dd><p>Creates a customer based on provided data</p>
</dd>
<dt><a href="#updateCustomer">updateCustomer(customerId, data, callback)</a></dt>
<dd><p>Updates a customer based on provided Customer ID and Customer Data</p>
</dd>
<dt><a href="#deleteCustomer">deleteCustomer(customerId, callback)</a></dt>
<dd><p>Deletes a customer based on proviced Customer Id</p>
</dd>
<dt><a href="#createCustomerCard">createCustomerCard(customerId, data, callback)</a></dt>
<dd><p>Creates a card for provided Customer Id</p>
</dd>
<dt><a href="#deleteCustomerCard">deleteCustomerCard(customerId, cardId, callback)</a></dt>
<dd><p>Deletes a card associated with a customer</p>
</dd>
<dt><a href="#listTransactions">listTransactions([queryParams], callback)</a></dt>
<dd><p>lists transactions for a location, has various query parameters</p>
</dd>
<dt><a href="#getTransaction">getTransaction(transactionId, callback)</a></dt>
<dd><p>Fetches a transaction based on Transaction ID</p>
</dd>
<dt><a href="#voidTransaction">voidTransaction(transactionId, callback)</a></dt>
<dd><p>Voids a transaction based on Transaction ID</p>
</dd>
<dt><a href="#chargeTransaction">chargeTransaction(data, callback)</a></dt>
<dd><p>Charges a transaction with provided data</p>
</dd>
<dt><a href="#captureTransaction">captureTransaction(transactionId, callback)</a></dt>
<dd><p>Captures a transaction based on Transaction ID</p>
</dd>
<dt><a href="#createRefund">createRefund(transactionId, callback)</a></dt>
<dd><p>Creates a refund for the provided Transaction Id</p>
</dd>
<dt><a href="#listRefunds">listRefunds([queryParams], callback)</a></dt>
<dd><p>Lists Refunds for an instance</p>
</dd>
</dl>

<a name="SquareConnect"></a>

## SquareConnect(locationId, accessToken, [extendedDebugInfo])
Main Export, instantiates a Square Client

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locationId | <code>String</code> |  | Square Location ID |
| accessToken | <code>String</code> |  | Access Token per location |
| [extendedDebugInfo] | <code>Boolean</code> | <code>false</code> | Extended response info, useful for debugging as Square doesn't always return an explicit error |

<a name="SquareConnect+getCustomerInfoFromReceipt"></a>

### squareConnect.getCustomerInfoFromReceipt(receiptUrl, callback)
Extracts AID from customer receipt based on Url, only to be used for Card Transactions

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| receiptUrl | <code>String</code> | URL of payment receipt |
| callback | <code>function</code> |  |

<a name="getMerchantProfile"></a>

## getMerchantProfile(callback)
Returns known Square Data for Merchant based on Auth Token

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-merchantid">Read More</a> |

<a name="listLocations"></a>

## listLocations(callback)
Returns a list of all locations for this merchant

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-locations">Read More</a> |

<a name="listRoles"></a>

## listRoles([queryParams], callback)
Returns known Square Roles for Merchant based on Instance Auth Token

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roles">Properties</a> |
| callback | <code>function</code> |  |

<a name="getRole"></a>

## getRole(roleId, callback)
Returns a role, queried by Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | Id of role to query <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roleid">Read More</a> |
| callback | <code>function</code> |  |

<a name="createRole"></a>

## createRole(data, callback)
Creates a Role

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-roles">Properties</a> |
| callback | <code>function</code> |  |

<a name="updateRole"></a>

## updateRole(roleId, data, callback)
Updates a Role based on roleId and provided data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | Role Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-roleid">Properties</a> |
| callback | <code>function</code> |  |

<a name="listEmployees"></a>

## listEmployees([queryParams], callback)
Returns Employees based on Instance Location Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employees">Properties</a> |
| callback | <code>function</code> |  |

<a name="getEmployee"></a>

## getEmployee(employeeId, callback)
Returns and Employee by employee Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| employeeId | <code>String</code> | Employee Id to Fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employeeid">Read More</a> |
| callback | <code>function</code> |  |

<a name="createEmployee"></a>

## createEmployee(data, callback)
Creates an employee

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-employees">Properties</a> |
| callback | <code>function</code> |  |

<a name="updateEmployee"></a>

## updateEmployee(squareEmployeeId, data, callback)
Update Employee based on employee ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| squareEmployeeId | <code>String</code> | Employee Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-employeeid">Properties</a> |
| callback | <code>function</code> |  |

<a name="listItems"></a>

## listItems(callback)
list Items based on location ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-items">Read More</a> |

<a name="createItem"></a>

## createItem(data, callback)
Creates an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-items">Properties</a> |
| callback | <code>function</code> |  |

<a name="getItem"></a>

## getItem(itemId, callback)
Fetches an Item based on Item ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | item ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-itemid">Read More</a> |
| callback | <code>function</code> |  |

<a name="updateItem"></a>

## updateItem(itemId, data, callback)
Updates an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteItem"></a>

## deleteItem(itemId, callback)
Deletes an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to delete  <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid">Read More</a> |
| callback | <code>function</code> |  |

<a name="uploadItemImage"></a>

## uploadItemImage(itemId, imageUrl, imageExtension, callback)
Uploads an Item image. This function is intended to use url based references but could be updated to use file system images. If requested,
it could also automatically generate the image extension via something like GraphicsMagick/ImageMagick
<a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">Read More</a>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to upload image for |
| imageUrl | <code>String</code> | Image URL path |
| imageExtension | <code>String</code> | Image Extension |
| callback | <code>function</code> |  |

<a name="listInventory"></a>

## listInventory([queryParams], callback)
List Inventory of Items & Variations based on Location Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-inventory">Properties</a> |
| callback | <code>function</code> |  |

<a name="adjustInventory"></a>

## adjustInventory(variationId, data, callback)
Adjusts inventory for a variation

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| variationId | <code>String</code> | variation Id to adjust/update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-inventory-variationid">Properties</a> |
| callback | <code>function</code> |  |

<a name="listCategories"></a>

## listCategories(callback)
list Categories based on location ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-categories">Read More</a> |

<a name="createCategory"></a>

## createCategory(data, callback)
Creates a Category

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-categories">Properties</a> |
| callback | <code>function</code> |  |

<a name="updateCategory"></a>

## updateCategory(categoryId, data, callback)
Updates a Category based on provided Category Id and Data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| categoryId | <code>String</code> | Category Id to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-categoryid">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteCategory"></a>

## deleteCategory(categoryId, callback)
Deletes a Category

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| categoryId | <code>String</code> | category ID to delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-categoryid">Read More</a> |
| callback | <code>function</code> |  |

<a name="createVariation"></a>

## createVariation(itemId, data, callback)
Creates a Variation for an already created Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to create the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-variations">Properties</a> |
| callback | <code>function</code> |  |

<a name="updateVariation"></a>

## updateVariation(itemId, variationId, data, callback)
Updates a Variation for an already created Item and Variation

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to update the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-variationid">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteVariation"></a>

## deleteVariation(itemId, variationId, callback)
Deletes a Variation for an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to Delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-variationid">Read More</a> |
| callback | <code>function</code> |  |

<a name="listOrders"></a>

## listOrders([queryParams], callback)
Lists orders for an instance, takes various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-orders">Properties</a> |
| callback | <code>function</code> |  |

<a name="getOrder"></a>

## getOrder(orderId, callback)
Fetches an Order based on Order Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| orderId | <code>String</code> | Order Id to fetch |
| callback | <code>function</code> |  |

<a name="updateOrder"></a>

## updateOrder(orderId, data, callback)
Updates an order based on Order Id and provided Data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| orderId | <code>String</code> | Order Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-orderid">Properties</a> |
| callback | <code>function</code> |  |

<a name="listBankAccounts"></a>

## listBankAccounts(callback)
Lists Bank Accounts for an Instance

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccounts">Read More</a> |

<a name="getBankAccount"></a>

## getBankAccount(bankAccountId, callback)
Fetches a Bank Account based on Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bankAccountId | <code>String</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccountid">Read More</a> |
| callback | <code>function</code> |  |

<a name="listPayments"></a>

## listPayments([queryParams], callback)
lists payments based on instance location ID, has various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-payments">Properties</a> |
| callback | <code>function</code> |  |

<a name="getPayment"></a>

## getPayment(paymentId, callback)
fetches a payment based on payment ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| paymentId | <code>String</code> | payment ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-paymentid">Read More</a> |
| callback | <code>function</code> |  |

<a name="listTimecards"></a>

## listTimecards(callback)
Lists timecards for an instance

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecards">Read More</a> |

<a name="getTimecard"></a>

## getTimecard(timecardId, callback)
Gets a timecard based on Timecard Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Timecard Id to fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecardid">Read More</a> |

<a name="createTimecard"></a>

## createTimecard(data, callback)
Creates a timecard for an employee

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | takes data as a key:value object <a href="https://docs.connect.squareup.com/api/connect/v1/#post-timecards">Properties</a> |
| callback | <code>function</code> |  |

<a name="updateTimecard"></a>

## updateTimecard(timecardId, data, callback)
Updates a timecard, takes in Timecard Id and Data Object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Timecard Id to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-timecardid">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteTimecard"></a>

## deleteTimecard(timecardId, callback)
Deletes a timecard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Id of Timecard to delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-timecardid">Read More</a> |

<a name="listTimecardEvents"></a>

## listTimecardEvents(timecardId, callback)
Lists all known events for a timecard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Id of timecard to look up |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-events">Read More</a> |

<a name="listCashDrawerShifts"></a>

## listCashDrawerShifts([queryParams], callback)
Lists all Cash Drawer Shifts for an instance, takes optional parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershifts">Properties</a> |
| callback | <code>function</code> |  |

<a name="getCashDrawerShift"></a>

## getCashDrawerShift(shiftId, callback)
Gets Cash Drawer Details for a provided Shift Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| shiftId | <code>String</code> | Shift Id to fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershiftid">Read More</a> |

<a name="listSettlements"></a>

## listSettlements([queryParams], callback)
lists Settlements based on instance location ID, has various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlements">Properties</a> |
| callback | <code>function</code> |  |

<a name="getSettlement"></a>

## getSettlement(settlementId, callback)
Fetches a Settlement based on Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| settlementId | <code>String</code> | Settlement Id to Fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlementid">Read More</a> |

<a name="listRefunds"></a>

## listRefunds([queryParams], callback)
lists Refunds based on instance location ID, has various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-refunds">Properties</a> |
| callback | <code>function</code> |  |

<a name="createRefund"></a>

## createRefund(data, callback)
Creates a refund

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-refunds">Properties</a> |
| callback | <code>function</code> |  |

<a name="listPages"></a>

## listPages(callback)
Lists all pages for an Instace Location

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-pages">Read More</a> |

<a name="createPage"></a>

## createPage(data, callback)
Creates a new Page with provided Data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-pages">Properties</a> |
| callback | <code>function</code> |  |

<a name="updatePage"></a>

## updatePage(pageId, data, callback)
Updates a Page based on provided Page Id and Data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-pageid">Properties</a> |
| callback | <code>function</code> |  |

<a name="deletePage"></a>

## deletePage(pageId, callback)
Deletes a Page based on provided Page Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-pageid">Read More</a> |

<a name="updateCell"></a>

## updateCell(pageId, data, callback)
Updates Cell Structure for a provided Page Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-cells">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteCell"></a>

## deleteCell(pageId, callback)
Delete all Cells on a page for provided Page Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Delete cells from |
| callback | <code>function</code> |  |

<a name="v2listLocations"></a>

## v2listLocations(callback)
Lists Locations for the Square Connect API V2

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#navsection-location">Read More</a> |

<a name="listCustomers"></a>

## listCustomers([queryParams], callback)
Lists Customers via instance Auth Token

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listcustomers">>Properties</a> |
| callback | <code>function</code> |  |

<a name="getCustomer"></a>

## getCustomer(customerId, callback)
Fetches a customer based on Customer ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | customer ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-retrievecustomer">Read More</a> |
| callback | <code>function</code> |  |

<a name="createCustomer"></a>

## createCustomer(data, callback)
Creates a customer based on provided data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomer">Properties</a> |
| callback | <code>function</code> |  |

<a name="updateCustomer"></a>

## updateCustomer(customerId, data, callback)
Updates a customer based on provided Customer ID and Customer Data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer ID to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-updatecustomer">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteCustomer"></a>

## deleteCustomer(customerId, callback)
Deletes a customer based on proviced Customer Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer Id to Delete <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomer">Read More</a> |
| callback | <code>function</code> |  |

<a name="createCustomerCard"></a>

## createCustomerCard(customerId, data, callback)
Creates a card for provided Customer Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer ID to add card |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomercard">Properties</a> |
| callback | <code>function</code> |  |

<a name="deleteCustomerCard"></a>

## deleteCustomerCard(customerId, cardId, callback)
Deletes a card associated with a customer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | provided Customer Id  <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomercard">Read More</a> |
| cardId | <code>String</code> | Card Id to delete |
| callback | <code>function</code> |  |

<a name="listTransactions"></a>

## listTransactions([queryParams], callback)
lists transactions for a location, has various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listtransactions">Properties</a> |
| callback | <code>function</code> | [description] |

<a name="getTransaction"></a>

## getTransaction(transactionId, callback)
Fetches a transaction based on Transaction ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | transaction ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-retrievetransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="voidTransaction"></a>

## voidTransaction(transactionId, callback)
Voids a transaction based on Transaction ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | Transaction ID to void <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-voidtransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="chargeTransaction"></a>

## chargeTransaction(data, callback)
Charges a transaction with provided data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-charge">Properties</a> |
| callback | <code>function</code> |  |

<a name="captureTransaction"></a>

## captureTransaction(transactionId, callback)
Captures a transaction based on Transaction ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-capturetransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="createRefund"></a>

## createRefund(transactionId, callback)
Creates a refund for the provided Transaction Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | Transaction Id to refund |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createrefund">Read More</a> |

<a name="listRefunds"></a>

## listRefunds([queryParams], callback)
Lists Refunds for an instance

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listrefunds">Properties</a> |
| callback | <code>function</code> |  |

