Cypress.Commands.add("checkCoursesDisplay", () => {
  cy.url().should("include", "/courses");
});
