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
<dt><a href="#listRoles">listRoles(callback)</a></dt>
<dd><p>Returns known Square Roles for Merchant based on Auth Token</p>
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
<dt><a href="#listEmployees">listEmployees(callback)</a></dt>
<dd><p>Returns Employees based on location ID</p>
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
<a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">DOCS</a></p>
</dd>
<dt><a href="#listInventory">listInventory(callback)</a></dt>
<dd><p>list Inventory of Items/Variations based on location ID</p>
</dd>
<dt><a href="#listCategories">listCategories(callback)</a></dt>
<dd><p>list Categories based on location ID</p>
</dd>
<dt><a href="#createCategory">createCategory(data, callback)</a></dt>
<dd><p>Creates a Category</p>
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
<dt><a href="#listCustomers">listCustomers(callback)</a></dt>
<dd><p>lists Customers via instance Auth Token</p>
</dd>
<dt><a href="#getCustomer">getCustomer(customerId, callback)</a></dt>
<dd><p>fetches a customer based on ID</p>
</dd>
<dt><a href="#listTransactions">listTransactions(params, callback)</a></dt>
<dd><p>lists transactions for a location, has various query parameters</p>
</dd>
<dt><a href="#getTransaction">getTransaction(transactionId, callback)</a></dt>
<dd><p>fetches a transaction based on transaction ID</p>
</dd>
<dt><a href="#voidTransaction">voidTransaction(transactionId, callback)</a></dt>
<dd><p>voids a transaction based on Transaction ID</p>
</dd>
<dt><a href="#listPayments">listPayments(params, callback)</a></dt>
<dd><p>lists payments based on instance location ID, has various query parameters</p>
</dd>
<dt><a href="#getPayment">getPayment(paymentId, callback)</a></dt>
<dd><p>fetches a payment based on payment ID</p>
</dd>
<dt><a href="#getCustomerInfoFromReceipt">getCustomerInfoFromReceipt(receiptUrl, callback)</a></dt>
<dd><p>Extracts AID from customer receipt based on Url, only to be used for Card Transactions</p>
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

<a name="getMerchantProfile"></a>

## getMerchantProfile(callback)
Returns known Square Data for Merchant based on Auth Token

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-merchantid">API</a> |

<a name="listLocations"></a>

## listLocations(callback)
Returns a list of all locations for this merchant

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-locations">API</a> |

<a name="listRoles"></a>

## listRoles(callback)
Returns known Square Roles for Merchant based on Auth Token

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#navsection-roles">API</a> |

<a name="getRole"></a>

## getRole(roleId, callback)
Returns a role, queried by Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | Id of role to query <a href="https://docs.connect.squareup.com/api/connect/v1/#get-roleid">DETAILS</a> |
| callback | <code>function</code> |  |

<a name="createRole"></a>

## createRole(data, callback)
Creates a Role

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-roles">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="updateRole"></a>

## updateRole(roleId, data, callback)
Updates a Role based on roleId and provided data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| roleId | <code>String</code> | [description] |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-roleid">PROPERTIES</a> |
| callback | <code>function</code> | [description] |

<a name="listEmployees"></a>

## listEmployees(callback)
Returns Employees based on location ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employees">API</a> |

<a name="getEmployee"></a>

## getEmployee(employeeId, callback)
Returns and Employee by employee Id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| employeeId | <code>String</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-employeeid">API</a> |
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
| squareEmployeeId | <code>String</code> |  |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-employeeid">Properties</a> |
| callback | <code>function</code> | [description] |

<a name="listItems"></a>

## listItems(callback)
list Items based on location ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-items">API</a> |

<a name="createItem"></a>

## createItem(data, callback)
Creates an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-items">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="getItem"></a>

## getItem(itemId, callback)
Fetches an Item based on Item ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | item ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-itemid">API</a> |
| callback | <code>function</code> |  |

<a name="updateItem"></a>

## updateItem(itemId, data, callback)
Updates an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to update |
| data | <code>Object</code> | <a href-"https://docs.connect.squareup.com/api/connect/v1/#put-itemid">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="deleteItem"></a>

## deleteItem(itemId, callback)
Deletes an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to delete  <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-itemid">API</a> |
| callback | <code>function</code> |  |

<a name="uploadItemImage"></a>

## uploadItemImage(itemId, imageUrl, imageExtension, callback)
Uploads an Item image. This function is intended to use url based references but could be updated to use file system images. If requested,
it could also automatically generate the image extension via something like GraphicsMagick/ImageMagick
<a href="https://docs.connect.squareup.com/api/connect/v1/#post-image">DOCS</a>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to upload image for |
| imageUrl | <code>String</code> | Image URL path |
| imageExtension | <code>String</code> | Image Extension |
| callback | <code>function</code> |  |

<a name="listInventory"></a>

## listInventory(callback)
list Inventory of Items/Variations based on location ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-inventory"></a> |

<a name="listCategories"></a>

## listCategories(callback)
list Categories based on location ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-categories"></a> |

<a name="createCategory"></a>

## createCategory(data, callback)
Creates a Category

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-categories">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="deleteCategory"></a>

## deleteCategory(categoryId, callback)
Deletes a Category

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| categoryId | <code>String</code> | category ID to delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-categoryid"></a> |
| callback | <code>function</code> |  |

<a name="createVariation"></a>

## createVariation(itemId, data, callback)
Creates a Variation for an already created Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID to create the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#post-variations">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="updateVariation"></a>

## updateVariation(itemId, variationId, data, callback)
Updates a Variation for an already created Item and Variation

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to update the Variation for |
| data | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#put-variationid">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="deleteVariation"></a>

## deleteVariation(itemId, variationId, callback)
Deletes a Variation for an Item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>String</code> | Item ID for referencing child Variation |
| variationId | <code>String</code> | Variation ID to Delete <a href="https://docs.connect.squareup.com/api/connect/v1/#delete-variationid">API</a> |
| callback | <code>function</code> |  |

<a name="listCustomers"></a>

## listCustomers(callback)
lists Customers via instance Auth Token

**Kind**: global function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="getCustomer"></a>

## getCustomer(customerId, callback)
fetches a customer based on ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>String</code> | customer ID to fetch |
| callback | <code>function</code> |  |

<a name="listTransactions"></a>

## listTransactions(params, callback)
lists transactions for a location, has various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Objects</code> | <a href="https://docs.connect.squareup.com/api/connect/v2/#endpoint-listtransactions">PROPERTIES</a> |
| callback | <code>function</code> | [description] |

<a name="getTransaction"></a>

## getTransaction(transactionId, callback)
fetches a transaction based on transaction ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | transaction ID to fetch |
| callback | <code>function</code> |  |

<a name="voidTransaction"></a>

## voidTransaction(transactionId, callback)
voids a transaction based on Transaction ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>String</code> | Transaction ID to void |
| callback | <code>function</code> |  |

<a name="listPayments"></a>

## listPayments(params, callback)
lists payments based on instance location ID, has various query parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | <a href="https://docs.connect.squareup.com/api/connect/v1/#get-payments">PROPERTIES</a> |
| callback | <code>function</code> |  |

<a name="getPayment"></a>

## getPayment(paymentId, callback)
fetches a payment based on payment ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| paymentId | <code>String</code> | payment ID to fetch <a href="https://docs.connect.squareup.com/api/connect/v1/#get-paymentid">API</a> |
| callback | <code>function</code> |  |

<a name="getCustomerInfoFromReceipt"></a>

## getCustomerInfoFromReceipt(receiptUrl, callback)
Extracts AID from customer receipt based on Url, only to be used for Card Transactions

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| receiptUrl | <code>String</code> | URL of payment receipt |
| callback | <code>function</code> |  |

