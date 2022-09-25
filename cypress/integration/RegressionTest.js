/// <reference types= "cypress" />

describe("Quales Course Management Regression Test suite", () => {
  beforeEach(() => {
    //Login
    cy.Login({});
  });

  context("In app tests", () => {
    it("Validate that users with valid credentials can login to the app successfully", () => {
      //Test successful login
      cy.checksuccessfulLoginMessage({});
    });

    it("Validate that courses are displayed successfully", () => {
      //Test courses are listed.
      cy.checkCoursesDisplay({});
    });
  });

  context("Tear Down", () => {
    it("Validate that users can logout of the app successfully", () => {
      //Test successful logout
      cy.checkLogout({});
    });
  });
});
