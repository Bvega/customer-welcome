"use strict";
function createCustomer(customer) {
    if (customer.loyaltyMember) {
        return `Welcome, ${customer.name}! Thanks for being a loyal customer!`;
    }
    else {
        return `Welcome, ${customer.name}!`;
    }
}
// Wait for the page to load before attaching event listeners
window.onload = () => {
    const form = document.getElementById("customerForm");
    const message = document.getElementById("message");
    form.onsubmit = (event) => {
        event.preventDefault();
        const idInput = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const loyaltyMember = document.getElementById("loyaltyMember").checked;
        const customer = {
            id: isNaN(Number(idInput)) ? idInput : Number(idInput),
            name,
            email,
            loyaltyMember,
        };
        message.textContent = createCustomer(customer);
    };
};
