Cypress.Commands.add("clickLogout", () => {
  cy.logoutBtn().click();
});

Cypress.Commands.add("assertLoginPage", () => {
  cy.url().should("include", "/login");
});
