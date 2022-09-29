/// <reference types= "cypress" />

describe("Quales Course Management Regression API Test suite", () => {
  it("Get All Courses", () => {
    cy.request({
      method: "GET",
      url: "/" + "/api/courses",
    }).as("searchAllCoursesRequest");
    cy.get("@searchAllCoursesRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(res.body.data[0]).to.have.property("id");
      expect(res.body.data[0]).to.have.property("title");
    });
  });

  it("Get a particular Course", () => {
    cy.request({
      method: "GET",
      url: "/" + "/api/courses/139",
    }).as("searchACourseRequest");
    cy.get("@searchACourseRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title");
    });
  });

  it("Create a particular Course", () => {
    cy.request({
      method: "POST",
      url: "/" + "/api/courses/",
      body: {
        title: "Cypress Course",
        categoryId: 2,
        description: "Testing Cypress course",
        courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
        imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
        location: "online",
        isPremium: false,
      },
    }).as("createACourseRequest");
    cy.get("@createACourseRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title");
    });
  });
});
