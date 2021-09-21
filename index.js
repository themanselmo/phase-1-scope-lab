// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'rich';
var bestCustomer;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'amanda';
}