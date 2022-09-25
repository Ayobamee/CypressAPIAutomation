Cypress.Commands.add("Login", () => {
  //Load test env
  cy.visit("/");

  //Click Sign Button
  cy.SignBtn().click();

  //Enter username
  cy.userNameField().type(Cypress.env("username"));

  //Enter password
  cy.passwordField().type(Cypress.env("password"));
  //click login
  cy.loginBtn().click();
});
