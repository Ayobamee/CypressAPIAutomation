Cypress.Commands.add("assertAppLoads", () => {
  cy.contains("Training");
});

Cypress.Commands.add("SignBtn", () => {
  cy.contains("Sign In");
});

Cypress.Commands.add("userNameField", () => {
  cy.get("[data-testid=EmailAddress]");
});

Cypress.Commands.add("passwordField", () => {
  cy.get("[data-testid=Password]");
});

Cypress.Commands.add("loginBtn", () => {
  cy.get(".MuiButton-contained");
});

Cypress.Commands.add("checksuccessfulLoginMessage", () => {
  cy.get(".Toastify__toast-body > :nth-child(2)");
});
