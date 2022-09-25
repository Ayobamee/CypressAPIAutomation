Cypress.Commands.add("checkLogout", () => {
  cy.logoutBtn().click();
  cy.url().should("include", "/login");
});
