#Square Connect Node
### Instantiate a SquareConnect client with the main export below, each instance method takes a callback with standard (err, response) protocol
---------------------
<a name="SquareConnect"></a>

## SquareConnect(locationId, accessToken, [extendedDebugInfo])
Main Export, instantiates a Square Client

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locationId | <code>String</code> |  | Square Location ID |
| accessToken | <code>String</code> |  | Access Token per location |
| [extendedDebugInfo] | <code>Boolean</code> | <code>false</code> | Extended response info, useful for debugging as Square doesn't always return an explicit error |


* [SquareConnect(locationId, accessToken, [extendedDebugInfo])](#SquareConnect)
    * [.getMerchantProfile(callback)](#SquareConnect+getMerchantProfile)
    * [.listLocations(callback)](#SquareConnect+listLocations)
    * [.listRoles(callback)](#SquareConnect+listRoles)
    * [.getRole(roleId, callback)](#SquareConnect+getRole)
    * [.createRole(data, callback)](#SquareConnect+createRole)
    * [.updateRole(roleId, data, callback)](#SquareConnect+updateRole)
    * [.listEmployees(callback)](#SquareConnect+listEmployees)
    * [.getEmployee(employeeId, callback)](#SquareConnect+getEmployee)
    * [.createEmployee(data, callback)](#SquareConnect+createEmployee)
    * [.updateEmployee(squareEmployeeId, data, callback)](#SquareConnect+updateEmployee)
    * [.listItems(callback)](#SquareConnect+listItems)
    * [.createItem(data, callback)](#SquareConnect+createItem)
    * [.getItem(itemId, callback)](#SquareConnect+getItem)
    * [.updateItem(itemId, data, callback)](#SquareConnect+updateItem)
    * [.deleteItem(itemId, callback)](#SquareConnect+deleteItem)
    * [.uploadItemImage(itemId, imageUrl, imageExtension, callback)](#SquareConnect+uploadItemImage)
    * [.listInventory(callback)](#SquareConnect+listInventory)
    * [.adjustInventory(variationId, data, callback)](#SquareConnect+adjustInventory)
    * [.listCategories(callback)](#SquareConnect+listCategories)
    * [.createCategory(data, callback)](#SquareConnect+createCategory)
    * [.updateCategory(categoryId, data, callback)](#SquareConnect+updateCategory)
    * [.deleteCategory(categoryId, callback)](#SquareConnect+deleteCategory)
    * [.createVariation(itemId, data, callback)](#SquareConnect+createVariation)
    * [.updateVariation(itemId, variationId, data, callback)](#SquareConnect+updateVariation)
    * [.deleteVariation(itemId, variationId, callback)](#SquareConnect+deleteVariation)
    * [.listCustomers(callback)](#SquareConnect+listCustomers)
    * [.getCustomer(customerId, callback)](#SquareConnect+getCustomer)
    * [.createCustomer(data, callback)](#SquareConnect+createCustomer)
    * [.updateCustomer(customerId, data, callback)](#SquareConnect+updateCustomer)
    * [.deleteCustomer(customerId, callback)](#SquareConnect+deleteCustomer)
    * [.listBankAccounts(callback)](#SquareConnect+listBankAccounts)
    * [.getBankAccount(bankAccountId, callback)](#SquareConnect+getBankAccount)
    * [.listTransactions(params, callback)](#SquareConnect+listTransactions)
    * [.getTransaction(transactionId, callback)](#SquareConnect+getTransaction)
    * [.voidTransaction(transactionId, callback)](#SquareConnect+voidTransaction)
    * [.chargeTransaction(data, callback)](#SquareConnect+chargeTransaction)
    * [.captureTransaction(transactionId, callback)](#SquareConnect+captureTransaction)
    * [.listPayments(params, callback)](#SquareConnect+listPayments)
    * [.getPayment(paymentId, callback)](#SquareConnect+getPayment)
    * [.getCustomerInfoFromReceipt(receiptUrl, callback)](#SquareConnect+getCustomerInfoFromReceipt)

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

### squareConnect.listRoles(callback)
Returns known Square Roles for Merchant based on Auth Token

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#navsection-roles">Read More</a> |

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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-roles">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateRole"></a>

### squareConnect.updateRole(roleId, data, callback)
Updates a Role based on roleId and provided data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | Role Id to Update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-roleid">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listEmployees"></a>

### squareConnect.listEmployees(callback)
Returns Employees based on location ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employees">Read More</a> |

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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-items">PROPERTIES</a> |
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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-itemid">PROPERTIES</a> |
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

### squareConnect.uploadItemImage(itemId, imageUrl, imageExtension, callback)
Uploads an Item image. This function is intended to use url based references but could be updated to use file system images. If requested,
it could also automatically generate the image extension via something like GraphicsMagick/ImageMagick
<a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">Read More</a>

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to upload image for |
| imageUrl | <code>String</code> | Image URL path |
| imageExtension | <code>String</code> | Image Extension |
| callback | <code>function</code> |  |

<a name="SquareConnect+listInventory"></a>

### squareConnect.listInventory(callback)
List Inventory of Items & Variations based on Location Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-inventory">Read More</a> |

<a name="SquareConnect+adjustInventory"></a>

### squareConnect.adjustInventory(variationId, data, callback)
Adjusts inventory for a variation

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| variationId | <code>String</code> | variation Id to adjust/update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-inventory-variationid">PROPERTIES</a> |
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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-categories">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateCategory"></a>

### squareConnect.updateCategory(categoryId, data, callback)
Updates a Category based on provided Category Id and Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| categoryId | <code>String</code> | Category Id to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-categoryid">PROPERTIES</a> |
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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-variations">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateVariation"></a>

### squareConnect.updateVariation(itemId, variationId, data, callback)
Updates a Variation for an already created Item and Variation

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to update the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-variationid">PROPERTIES</a> |
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

<a name="SquareConnect+listCustomers"></a>

### squareConnect.listCustomers(callback)
Lists Customers via instance Auth Token

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listcustomers">Read More</a> |

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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-createcustomer">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+updateCustomer"></a>

### squareConnect.updateCustomer(customerId, data, callback)
Updates a customer based on provided Customer ID and Customer Data

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer ID to update |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-updatecustomer">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+deleteCustomer"></a>

### squareConnect.deleteCustomer(customerId, callback)
Deletes a customer based on proviced Customer Id

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | Customer Id to Delete <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-deletecustomer">Read More</a> |
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

<a name="SquareConnect+listTransactions"></a>

### squareConnect.listTransactions(params, callback)
lists transactions for a location, has various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Objects</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listtransactions">PROPERTIES</a> |
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
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-charge">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+captureTransaction"></a>

### squareConnect.captureTransaction(transactionId, callback)
Captures a transaction based on Transaction ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-capturetransaction">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+listPayments"></a>

### squareConnect.listPayments(params, callback)
lists payments based on instance location ID, has various query parameters

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-payments">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getPayment"></a>

### squareConnect.getPayment(paymentId, callback)
fetches a payment based on payment ID

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| paymentId | <code>String</code> | payment ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-paymentid">Read More</a> |
| callback | <code>function</code> |  |

<a name="SquareConnect+getCustomerInfoFromReceipt"></a>

### squareConnect.getCustomerInfoFromReceipt(receiptUrl, callback)
Extracts AID from customer receipt based on Url, only to be used for Card Transactions

**Kind**: instance method of <code>[SquareConnect](#SquareConnect)</code>  

| Param | Type | Description |
| --- | --- | --- |
| receiptUrl | <code>String</code> | URL of payment receipt |
| callback | <code>function</code> |  |

