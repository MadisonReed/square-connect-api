#Square Connect Node :money_with_wings:

####<a href="https://www.npmjs.com/package/square-connect-api">View on NPM</a>
npm install square-connect-node

Instantiate a SquareConnect client with the main export below, each instance method takes a `callback` as the last argument with standard `(err, response)` protocol.
---------------------

<a name="SquareConnect"></a>

## SquareConnect
Main Export, instantiates a Square Client

**Kind**: global class  

* [SquareConnect](#SquareConnect)
    * [new SquareConnect(locationId, accessToken, [extendedDebugInfo])](#new_SquareConnect_new)
    * [.getMerchantProfile(callback)](#SquareConnect+getMerchantProfile)
    * [.listLocations(callback)](#SquareConnect+listLocations)
    * [.listRoles([queryParams], callback)](#SquareConnect+listRoles)
    * [.getRole(roleId, callback)](#SquareConnect+getRole)
    * [.createRole(data, callback)](#SquareConnect+createRole)
    * [.updateRole(roleId, data, callback)](#SquareConnect+updateRole)
    * [.listEmployees([queryParams], callback)](#SquareConnect+listEmployees)
    * [.getEmployee(employeeId, callback)](#SquareConnect+getEmployee)
    * [.createEmployee(data, callback)](#SquareConnect+createEmployee)
    * [.updateEmployee(squareEmployeeId, data, callback)](#SquareConnect+updateEmployee)
    * [.listTimecards(callback)](#SquareConnect+listTimecards)
    * [.getTimecard(timecardId, callback)](#SquareConnect+getTimecard)
    * [.createTimecard(data, callback)](#SquareConnect+createTimecard)
    * [.updateTimecard(timecardId, data, callback)](#SquareConnect+updateTimecard)
    * [.deleteTimecard(timecardId, callback)](#SquareConnect+deleteTimecard)
    * [.listTimecardEvents(timecardId, callback)](#SquareConnect+listTimecardEvents)
    * [.listCashDrawerShifts([queryParams], callback)](#SquareConnect+listCashDrawerShifts)
    * [.getCashDrawerShift(shiftId, callback)](#SquareConnect+getCashDrawerShift)
    * [.listItems(callback)](#SquareConnect+listItems)
    * [.createItem(data, callback)](#SquareConnect+createItem)
    * [.getItem(itemId, callback)](#SquareConnect+getItem)
    * [.updateItem(itemId, data, callback)](#SquareConnect+updateItem)
    * [.deleteItem(itemId, callback)](#SquareConnect+deleteItem)
    * [.uploadItemImage(itemId, imageLocation, [fileName], callback)](#SquareConnect+uploadItemImage)
    * [.listInventory([queryParams], callback)](#SquareConnect+listInventory)
    * [.adjustInventory(variationId, data, callback)](#SquareConnect+adjustInventory)
    * [.listCategories(callback)](#SquareConnect+listCategories)
    * [.createCategory(data, callback)](#SquareConnect+createCategory)
    * [.updateCategory(categoryId, data, callback)](#SquareConnect+updateCategory)
    * [.deleteCategory(categoryId, callback)](#SquareConnect+deleteCategory)
    * [.createVariation(itemId, data, callback)](#SquareConnect+createVariation)
    * [.updateVariation(itemId, variationId, data, callback)](#SquareConnect+updateVariation)
    * [.deleteVariation(itemId, variationId, callback)](#SquareConnect+deleteVariation)
    * [.listOrders([queryParams], callback)](#SquareConnect+listOrders)
    * [.getOrder(orderId, callback)](#SquareConnect+getOrder)
    * [.updateOrder(orderId, data, callback)](#SquareConnect+updateOrder)
    * [.listBankAccounts(callback)](#SquareConnect+listBankAccounts)
    * [.getBankAccount(bankAccountId, callback)](#SquareConnect+getBankAccount)
    * [.listPayments([queryParams], callback)](#SquareConnect+listPayments)
    * [.getPayment(paymentId, callback)](#SquareConnect+getPayment)
    * [.listSettlements([queryParams], callback)](#SquareConnect+listSettlements)
    * [.getSettlement(settlementId, callback)](#SquareConnect+getSettlement)
    * [.listRefunds([queryParams], callback)](#SquareConnect+listRefunds)
    * [.createRefund(data, callback)](#SquareConnect+createRefund)
    * [.listDiscounts([queryParams], callback)](#SquareConnect+listDiscounts)
    * [.createDiscount(data, callback)](#SquareConnect+createDiscount)
    * [.updateDiscount(discountId, data, callback)](#SquareConnect+updateDiscount)
    * [.deleteDiscount(discountId, callback)](#SquareConnect+deleteDiscount)
    * [.listFees([queryParams], callback)](#SquareConnect+listFees)
    * [.createFee(data, callback)](#SquareConnect+createFee)
    * [.updateFee(feeId, data, callback)](#SquareConnect+updateFee)
    * [.deleteFee(feeId, callback)](#SquareConnect+deleteFee)
    * [.applyFee(feeId, itemId, callback)](#SquareConnect+applyFee)
    * [.removeFee(feeId, itemId, callback)](#SquareConnect+removeFee)
    * [.listModifierLists(callback)](#SquareConnect+listModifierLists)
    * [.getModifierList(modifierListId, callback)](#SquareConnect+getModifierList)
    * [.createModifierList(data, callback)](#SquareConnect+createModifierList)
    * [.updateModifierList(modifierListId, data, callback)](#SquareConnect+updateModifierList)
    * [.deleteModifierList(modifierListId, callback)](#SquareConnect+deleteModifierList)
    * [.applyModifierList(modifierListId, itemId, callback)](#SquareConnect+applyModifierList)
    * [.removeModifierList(modifierListId, itemId, callback)](#SquareConnect+removeModifierList)
    * [.createModifierOption(modifierListId, data, callback)](#SquareConnect+createModifierOption)
    * [.updateModifierOption(modifierListId, modifierOptionId, data, callback)](#SquareConnect+updateModifierOption)
    * [.deleteModifierOption(modifierListId, modifierOptionId, callback)](#SquareConnect+deleteModifierOption)
    * [.listPages(callback)](#SquareConnect+listPages)
    * [.createPage(data, callback)](#SquareConnect+createPage)
    * [.updatePage(pageId, data, callback)](#SquareConnect+updatePage)
    * [.deletePage(pageId, callback)](#SquareConnect+deletePage)
    * [.updateCell(pageId, data, callback)](#SquareConnect+updateCell)
    * [.deleteCell(pageId, callback)](#SquareConnect+deleteCell)
    * [.v2listLocations(callback)](#SquareConnect+v2listLocations)
    * [.listCustomers([queryParams], callback)](#SquareConnect+listCustomers)
    * [.getCustomer(customerId, callback)](#SquareConnect+getCustomer)
    * [.createCustomer(data, callback)](#SquareConnect+createCustomer)
    * [.updateCustomer(customerId, data, callback)](#SquareConnect+updateCustomer)
    * [.deleteCustomer(customerId, callback)](#SquareConnect+deleteCustomer)
    * [.createCustomerCard(customerId, data, callback)](#SquareConnect+createCustomerCard)
    * [.deleteCustomerCard(customerId, cardId, callback)](#SquareConnect+deleteCustomerCard)
    * [.listTransactions([queryParams], callback)](#SquareConnect+listTransactions)
    * [.getTransaction(transactionId, callback)](#SquareConnect+getTransaction)
    * [.voidTransaction(transactionId, callback)](#SquareConnect+voidTransaction)
    * [.chargeTransaction(data, callback)](#SquareConnect+chargeTransaction)
    * [.captureTransaction(transactionId, callback)](#SquareConnect+captureTransaction)
    * [.createRefund(transactionId, callback)](#SquareConnect+createRefund)
    * [.listRefunds([queryParams], callback)](#SquareConnect+listRefunds)

<a name="new_SquareConnect_new"></a>

### new SquareConnect(locationId, accessToken, [extendedDebugInfo])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locationId | <code>String</code> |  | Square Location ID |
| accessToken | <code>String</code> |  | Access Token per location |
| [extendedDebugInfo] | <code>Boolean</code> | <code>false</code> | Extended response info, useful for debugging as Square doesn't always return an explicit error |

<a name="SquareConnect+getMerchantProfile"></a>

### squareConnect.getMerchantProfile(callback)
Returns known Square Data for Merchant based on Auth Token

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-merchantid">Read More</a> |

<a name="SquareConnect+listLocations"></a>

### squareConnect.listLocations(callback)
Returns a list of all locations for this merchant

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-locations">Read More</a> |

<a name="SquareConnect+listRoles"></a>

### squareConnect.listRoles([queryParams], callback)
Returns known Square Roles for Merchant based on Instance Auth Token

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roles">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getRole"></a>

### squareConnect.getRole(roleId, callback)
Returns a role, queried by Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | Id of role to query <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roleid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createRole"></a>

### squareConnect.createRole(data, callback)
Creates a Role

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-roles">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateRole"></a>

### squareConnect.updateRole(roleId, data, callback)
Updates a Role based on roleId and provided data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | Role Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-roleid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listEmployees"></a>

### squareConnect.listEmployees([queryParams], callback)
Returns Employees based on Instance Location Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employees">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getEmployee"></a>

### squareConnect.getEmployee(employeeId, callback)
Returns and Employee by employee Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| employeeId | <code>String</code> | Employee Id to Fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employeeid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createEmployee"></a>

### squareConnect.createEmployee(data, callback)
Creates an employee

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-employees">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateEmployee"></a>

### squareConnect.updateEmployee(squareEmployeeId, data, callback)
Update Employee based on employee ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| squareEmployeeId | <code>String</code> | Employee Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-employeeid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listTimecards"></a>

### squareConnect.listTimecards(callback)
Lists timecards for an instance

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecards">Read More</a> |

<a name="SquareConnect+getTimecard"></a>

### squareConnect.getTimecard(timecardId, callback)
Gets a timecard based on Timecard Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Timecard Id to fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-timecardid">Read More</a> |

<a name="SquareConnect+createTimecard"></a>

### squareConnect.createTimecard(data, callback)
Creates a timecard for an employee

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | takes data as a key:value object <a href="https://docs.connect.squareup.com/api/connect/v1/#post-timecards">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateTimecard"></a>

### squareConnect.updateTimecard(timecardId, data, callback)
Updates a timecard, takes in Timecard Id and Data Object

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Timecard Id to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-timecardid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteTimecard"></a>

### squareConnect.deleteTimecard(timecardId, callback)
Deletes a timecard

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Id of Timecard to delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-timecardid">Read More</a> |

<a name="SquareConnect+listTimecardEvents"></a>

### squareConnect.listTimecardEvents(timecardId, callback)
Lists all known events for a timecard

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| timecardId | <code>String</code> | Id of timecard to look up |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-events">Read More</a> |

<a name="SquareConnect+listCashDrawerShifts"></a>

### squareConnect.listCashDrawerShifts([queryParams], callback)
Lists all Cash Drawer Shifts for an instance, takes optional parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershifts">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getCashDrawerShift"></a>

### squareConnect.getCashDrawerShift(shiftId, callback)
Gets Cash Drawer Details for a provided Shift Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shiftId | <code>String</code> | Shift Id to fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-cashdrawershiftid">Read More</a> |

<a name="SquareConnect+listItems"></a>

### squareConnect.listItems(callback)
list Items based on location ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-items">Read More</a> |

<a name="SquareConnect+createItem"></a>

### squareConnect.createItem(data, callback)
Creates an Item

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-items">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getItem"></a>

### squareConnect.getItem(itemId, callback)
Fetches an Item based on Item ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | item ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-itemid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateItem"></a>

### squareConnect.updateItem(itemId, data, callback)
Updates an Item

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteItem"></a>

### squareConnect.deleteItem(itemId, callback)
Deletes an Item

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to delete  <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+uploadItemImage"></a>

### squareConnect.uploadItemImage(itemId, imageLocation, [fileName], callback)
Uploads an Item image. This function takes both url or file syste based locations. It will automatically generate the buffer and file extension data necessary for the Connect API

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item Id to to receive the uploaded Image |
| imageLocation | <code>String</code> | Image URL or file system path |
| [fileName] | <code>String</code> | Optional fileName to provide when uploading, if not included, a filename will be parsed from the imageLocation |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">Read More</a> |

<a name="SquareConnect+listInventory"></a>

### squareConnect.listInventory([queryParams], callback)
List Inventory of Items & Variations based on Location Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-inventory">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+adjustInventory"></a>

### squareConnect.adjustInventory(variationId, data, callback)
Adjusts inventory for a variation

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| variationId | <code>String</code> | variation Id to adjust/update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-inventory-variationid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listCategories"></a>

### squareConnect.listCategories(callback)
list Categories based on location ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-categories">Read More</a> |

<a name="SquareConnect+createCategory"></a>

### squareConnect.createCategory(data, callback)
Creates a Category

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-categories">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateCategory"></a>

### squareConnect.updateCategory(categoryId, data, callback)
Updates a Category based on provided Category Id and Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| categoryId | <code>String</code> | Category Id to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-categoryid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteCategory"></a>

### squareConnect.deleteCategory(categoryId, callback)
Deletes a Category

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| categoryId | <code>String</code> | category ID to delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-categoryid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createVariation"></a>

### squareConnect.createVariation(itemId, data, callback)
Creates a Variation for an already created Item

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to create the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-variations">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateVariation"></a>

### squareConnect.updateVariation(itemId, variationId, data, callback)
Updates a Variation for an already created Item and Variation

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to update the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-variationid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteVariation"></a>

### squareConnect.deleteVariation(itemId, variationId, callback)
Deletes a Variation for an Item

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to Delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-variationid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listOrders"></a>

### squareConnect.listOrders([queryParams], callback)
Lists orders for an instance, takes various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-orders">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getOrder"></a>

### squareConnect.getOrder(orderId, callback)
Fetches an Order based on Order Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| orderId | <code>String</code> | Order Id to fetch |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateOrder"></a>

### squareConnect.updateOrder(orderId, data, callback)
Updates an order based on Order Id and provided Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| orderId | <code>String</code> | Order Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-orderid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listBankAccounts"></a>

### squareConnect.listBankAccounts(callback)
Lists Bank Accounts for an Instance

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccounts">Read More</a> |

<a name="SquareConnect+getBankAccount"></a>

### squareConnect.getBankAccount(bankAccountId, callback)
Fetches a Bank Account based on Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| bankAccountId | <code>String</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-bankaccountid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listPayments"></a>

### squareConnect.listPayments([queryParams], callback)
lists payments based on instance location ID, has various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-payments">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getPayment"></a>

### squareConnect.getPayment(paymentId, callback)
fetches a payment based on payment ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| paymentId | <code>String</code> | payment ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-paymentid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listSettlements"></a>

### squareConnect.listSettlements([queryParams], callback)
lists Settlements based on instance location ID, has various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlements">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getSettlement"></a>

### squareConnect.getSettlement(settlementId, callback)
Fetches a Settlement based on Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| settlementId | <code>String</code> | Settlement Id to Fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-settlementid">Read More</a> |

<a name="SquareConnect+listRefunds"></a>

### squareConnect.listRefunds([queryParams], callback)
lists Refunds based on instance location ID, has various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-refunds">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createRefund"></a>

### squareConnect.createRefund(data, callback)
Creates a refund

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-refunds">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listDiscounts"></a>

### squareConnect.listDiscounts([queryParams], callback)
Lists Discounts for an instance location, takes various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-discounts">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createDiscount"></a>

### squareConnect.createDiscount(data, callback)
Creates a Discount for a location based on provided data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-discounts">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateDiscount"></a>

### squareConnect.updateDiscount(discountId, data, callback)
Updates a Discount based on provided Discount Id and data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| discountId | <code>String</code> | Discount Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-discountid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteDiscount"></a>

### squareConnect.deleteDiscount(discountId, callback)
Deletes a Discount based on provided Discount Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| discountId | <code>String</code> | Discount Id to delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-discountid">Read More</a> |

<a name="SquareConnect+listFees"></a>

### squareConnect.listFees([queryParams], callback)
Lists Fees for an instance location, takes various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v1/#get-fees">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createFee"></a>

### squareConnect.createFee(data, callback)
Creates a Fee for a location based on provided data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-fees">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateFee"></a>

### squareConnect.updateFee(feeId, data, callback)
Updates a Fee based on provided Fee Id and data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| feeId | <code>String</code> | Fee Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-feeid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteFee"></a>

### squareConnect.deleteFee(feeId, callback)
Deletes a Fee based on provided Fee Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| feeId | <code>String</code> | Fee Id to Delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-feeid">Read More</a> |

<a name="SquareConnect+applyFee"></a>

### squareConnect.applyFee(feeId, itemId, callback)
Applies a Fee to an Item based on provided Fee and Item Ids

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| feeId | <code>String</code> | Fee Id to apply |
| itemId | <code>String</code> | Item Id that will receive the Fee |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid-feeid">Read More</a> |

<a name="SquareConnect+removeFee"></a>

### squareConnect.removeFee(feeId, itemId, callback)
Removes a Fee from an Item based on provided Fee and Item Id's

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| feeId | <code>String</code> | Fee Id to remove |
| itemId | <code>String</code> | Item Id to remove the Fee from |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid-feeid">Read More</a> |

<a name="SquareConnect+listModifierLists"></a>

### squareConnect.listModifierLists(callback)
Lists Modifier Lists for an instance location

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-modifierlists">Read More</a> |

<a name="SquareConnect+getModifierList"></a>

### squareConnect.getModifierList(modifierListId, callback)
Fetches a Modifier List based on provided Modifer List Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Fetch |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-modifierlistid">Read More</a> |

<a name="SquareConnect+createModifierList"></a>

### squareConnect.createModifierList(data, callback)
Creates a Modifer List based on provided Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-modifierlists">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateModifierList"></a>

### squareConnect.updateModifierList(modifierListId, data, callback)
Updates a Modifer List based on provided Modifier List Id and Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-modifierlistid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteModifierList"></a>

### squareConnect.deleteModifierList(modifierListId, callback)
Deletes a Modifier List based on provided Modifier List Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Delete |
| callback | <code>function</code> |  |

<a name="SquareConnect+applyModifierList"></a>

### squareConnect.applyModifierList(modifierListId, itemId, callback)
Applies a Modifier List to an Item based on provided Modifier List Id and Item Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Apply |
| itemId | <code>String</code> | Item Id to recieve the Modifier List |
| callback | <code>function</code> |  |

<a name="SquareConnect+removeModifierList"></a>

### squareConnect.removeModifierList(modifierListId, itemId, callback)
Removes a Modifier List from an Item based on provided Modifier List Id and Item Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Remove |
| itemId | <code>String</code> | Item Id to remove the Modifier List from |
| callback | <code>function</code> |  |

<a name="SquareConnect+createModifierOption"></a>

### squareConnect.createModifierOption(modifierListId, data, callback)
Creates a new Modifier Option for a Modifier List

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Create a new Option for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-modifieroptions">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateModifierOption"></a>

### squareConnect.updateModifierOption(modifierListId, modifierOptionId, data, callback)
Updates a Modifier Option based on Id and Provided Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Update |
| modifierOptionId | <code>String</code> | Modifier Optioin Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-modifieroptionid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteModifierOption"></a>

### squareConnect.deleteModifierOption(modifierListId, modifierOptionId, callback)
Deletes a Modfiier Option based on provided Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| modifierListId | <code>String</code> | Modifier List Id to Modify |
| modifierOptionId | <code>String</code> | Modifier Option Id to Delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-modifieroptionid">Read More</a> |

<a name="SquareConnect+listPages"></a>

### squareConnect.listPages(callback)
Lists all pages for an Instace Location

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-pages">Read More</a> |

<a name="SquareConnect+createPage"></a>

### squareConnect.createPage(data, callback)
Creates a new Page with provided Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-pages">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updatePage"></a>

### squareConnect.updatePage(pageId, data, callback)
Updates a Page based on provided Page Id and Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-pageid">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deletePage"></a>

### squareConnect.deletePage(pageId, callback)
Deletes a Page based on provided Page Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Delete |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-pageid">Read More</a> |

<a name="SquareConnect+updateCell"></a>

### squareConnect.updateCell(pageId, data, callback)
Updates Cell Structure for a provided Page Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-cells">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteCell"></a>

### squareConnect.deleteCell(pageId, callback)
Delete all Cells on a page for provided Page Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>String</code> | Page Id to Delete cells from |
| callback | <code>function</code> |  |

<a name="SquareConnect+v2listLocations"></a>

### squareConnect.v2listLocations(callback)
Lists Locations for the Square Connect API V2

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#navsection-location">Read More</a> |

<a name="SquareConnect+listCustomers"></a>

### squareConnect.listCustomers([queryParams], callback)
Lists Customers via instance Auth Token

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listcustomers">>Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getCustomer"></a>

### squareConnect.getCustomer(customerId, callback)
Fetches a customer based on Customer ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | customer ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-retrievecustomer">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createCustomer"></a>

### squareConnect.createCustomer(data, callback)
Creates a customer based on provided data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomer">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateCustomer"></a>

### squareConnect.updateCustomer(customerId, data, callback)
Updates a customer based on provided Customer ID and Customer Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer ID to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-updatecustomer">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteCustomer"></a>

### squareConnect.deleteCustomer(customerId, callback)
Deletes a customer based on proviced Customer Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer Id to Delete <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomer">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createCustomerCard"></a>

### squareConnect.createCustomerCard(customerId, data, callback)
Creates a card for provided Customer Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer ID to add card |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomercard">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteCustomerCard"></a>

### squareConnect.deleteCustomerCard(customerId, cardId, callback)
Deletes a card associated with a customer

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | provided Customer Id  <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomercard">Read More</a> |
| cardId | <code>String</code> | Card Id to delete |
| callback | <code>function</code> |  |

<a name="SquareConnect+listTransactions"></a>

### squareConnect.listTransactions([queryParams], callback)
lists transactions for a location, has various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listtransactions">Properties</a> |
| callback | <code>function</code> | [description] |

<a name="SquareConnect+getTransaction"></a>

### squareConnect.getTransaction(transactionId, callback)
Fetches a transaction based on Transaction ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | transaction ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-retrievetransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+voidTransaction"></a>

### squareConnect.voidTransaction(transactionId, callback)
Voids a transaction based on Transaction ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | Transaction ID to void <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-voidtransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+chargeTransaction"></a>

### squareConnect.chargeTransaction(data, callback)
Charges a transaction with provided data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-charge">Properties</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+captureTransaction"></a>

### squareConnect.captureTransaction(transactionId, callback)
Captures a transaction based on Transaction ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-capturetransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+createRefund"></a>

### squareConnect.createRefund(transactionId, callback)
Creates a refund for the provided Transaction Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | Transaction Id to refund |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createrefund">Read More</a> |

<a name="SquareConnect+listRefunds"></a>

### squareConnect.listRefunds([queryParams], callback)
Lists Refunds for an instance

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [queryParams] | <code>Object</code> | takes a query as a key:value object and will automatically construct the query string for Square. -  <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listrefunds">Properties</a> |
| callback | <code>function</code> |  |

