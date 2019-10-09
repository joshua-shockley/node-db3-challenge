# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.categoryName from products as p
join categories as c on p.categoryId = c.categoryId;


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select ord.orderId, shp.shipperName 
from orders as ord
join shippers as shp
where ord.orderId < 10409
group by orderId;


select ord.orderId, shp.shipperName
from orders as ord
join shippers as shp
where ord.orderDate < '1997-01-09'
group by ord.orderId;



### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT od.quantity, pd.productName, *
FROM [OrderDetails] as od
join products as pd on od.productId = pd.productId
where od.orderId = 10251
group by od.productId

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT  od.orderId, c.customerName, e.LastName, * FROM [Orders] as od
join customers as c on od.customerId = c.customerId
join employees as e on od.employeeId = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 