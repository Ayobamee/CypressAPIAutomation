Cypress.Commands.add("Login", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  //Load test env
  cy.visit("/");

  //Click Sign Button
  cy.SignBtn().click();

  //Enter username
  cy.userNameField().type(username);

  //Enter password
  cy.passwordField().type(password);
  //click login
  cy.loginBtn().click();
});
