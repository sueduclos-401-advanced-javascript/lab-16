# LAB 16 - Class 16

## Project Name - Code Academy Parcel Service

Code 401 Lab 16 - Event Driven Applications

Create an event driven application that “distributes” logging commands to separate modules. Application will be called *CAPS*, the Code Academy Parcel Service. CAPS will simulate a delivery service where sellers will ship products and be notified when customer receives those products.

Your application must simulate the order and delivery of an item, from seller to customer. The seller (or vendor) should alert the system that a package needs to be delivered, and a delivery driver should alert the system when a package is picked up for delivery. The driver should also alert the system when the package has been delivered. Thus, you should have three major events being communicated:

- `pickup` - Tells the system when a new order needs to be delivered
- `in-transit` - Tells the system which order is in the process of being delivered
- `delivered` - Tells the system when the order has been delivered

Your application should automatically generate random orders every 5 seconds. These random orders should have a store, id, customer, and address as the order data.

### Author: Sue Duclos

### Links and Resources

- [submission PR](https://github.com/sueduclos-401-advanced-javascript/lab-16/pull/1)
- [ci/cd](https://github.com/sueduclos-401-advanced-javascript/lab-16/actions) (GitHub Actions)

### Setup

- `npm install`

#### How to initialize/run your application

- `npm init`

#### Tests

- `npm test`


#### UML

- [UML] ()
