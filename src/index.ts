// Step 1: Define a type alias 'ID' that can be either a number or a string
type ID = number | string;

// Step 2: Define the shape of a Customer object using an interface
interface Customer {
  id: ID;                    // The customer's unique ID (number or string)
  name: string;              // The customer's name
  email: string;             // The customer's email address
  loyaltyMember?: boolean;   // Optional: whether the customer is a loyalty program member
}

// Step 3: Function that returns a welcome message for the given customer
function createCustomer(customer: Customer): string {
  if (customer.loyaltyMember) {
    return `Welcome, ${customer.name}! Thanks for being a loyal customer!`;
  } else {
    return `Welcome, ${customer.name}!`;
  }
}

// Step 4: Wait until the page is fully loaded before attaching event listeners
window.onload = () => {
  // Get the form element and the message display element
  const form = document.getElementById("customerForm") as HTMLFormElement;
  const message = document.getElementById("message") as HTMLParagraphElement;

  // Step 5: When the form is submitted...
  form.onsubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    // Step 6: Get the input values from the form
    const idInput = (document.getElementById("id") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const loyaltyMember = (document.getElementById("loyaltyMember") as HTMLInputElement).checked;

    // Step 7: Convert the form data into a Customer object
    const customer: Customer = {
      id: isNaN(Number(idInput)) ? idInput : Number(idInput), // Convert to number if possible
      name,
      email,
      loyaltyMember,
    };

    // Step 8: Display the welcome message
    message.textContent = createCustomer(customer);
  };
};
