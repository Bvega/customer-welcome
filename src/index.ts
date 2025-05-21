type ID = number | string;

interface Customer {
  id: ID;
  name: string;
  email: string;
  loyaltyMember?: boolean;
}

function createCustomer(customer: Customer): string {
  if (customer.loyaltyMember) {
    return `Welcome, ${customer.name}! Thanks for being a loyal customer!`;
  } else {
    return `Welcome, ${customer.name}!`;
  }
}

// Wait for the page to load before attaching event listeners
window.onload = () => {
  const form = document.getElementById("customerForm") as HTMLFormElement;
  const message = document.getElementById("message") as HTMLParagraphElement;

  form.onsubmit = (event) => {
    event.preventDefault();

    const idInput = (document.getElementById("id") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const loyaltyMember = (document.getElementById("loyaltyMember") as HTMLInputElement).checked;

    const customer: Customer = {
      id: isNaN(Number(idInput)) ? idInput : Number(idInput),
      name,
      email,
      loyaltyMember,
    };

    message.textContent = createCustomer(customer);
  };
};
