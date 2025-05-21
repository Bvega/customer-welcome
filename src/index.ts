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

const customer1: Customer = {
  id: 101,
  name: "Alice Smith",
  email: "alice@example.com",
  loyaltyMember: true
};

console.log(createCustomer(customer1));
