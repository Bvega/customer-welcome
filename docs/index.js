"use strict";
// Step 3: Function that returns a welcome message for the given customer
function createCustomer(customer) {
    if (customer.loyaltyMember) {
        return `Welcome, ${customer.name}! Thanks for being a loyal customer!`;
    }
    else {
        return `Welcome, ${customer.name}!`;
    }
}
// Step 4: Wait until the page is fully loaded before attaching event listeners
window.onload = () => {
    // Get the form element and the message display element
    const form = document.getElementById("customerForm");
    const message = document.getElementById("message");
    // Step 5: When the form is submitted...
    form.onsubmit = (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        // Step 6: Get the input values from the form
        const idInput = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const loyaltyMember = document.getElementById("loyaltyMember").checked;
        // Step 7: Convert the form data into a Customer object
        const customer = {
            id: isNaN(Number(idInput)) ? idInput : Number(idInput), // Convert to number if possible
            name,
            email,
            loyaltyMember,
        };
        // Step 8: Display the welcome message
        message.textContent = createCustomer(customer);
    };
};
