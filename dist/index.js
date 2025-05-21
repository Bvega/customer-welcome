"use strict";
function createCustomer(customer) {
    if (customer.loyaltyMember) {
        return `Welcome, ${customer.name}! Thanks for being a loyal customer!`;
    }
    else {
        return `Welcome, ${customer.name}!`;
    }
}
const customer1 = {
    id: 101,
    name: "Alice Smith",
    email: "alice@example.com",
    loyaltyMember: true
};
console.log(createCustomer(customer1));
