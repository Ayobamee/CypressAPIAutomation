/// <reference types= "cypress" />

describe("Quales Course Management Regression API Test suite", () => {
  const randomChar = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  let courseId = "";
  const path = "/api/courses/";
  it("Creates a Course", () => {
    cy.request({
      method: "POST",
      url: "/" + path,
      body: {
        title: "Course Automation" + randomChar(4),
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
      courseId = res.body.id;
      cy.log(JSON.stringify(courseId));
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title");
    });
  });

  it("Gets a  Course", () => {
    cy.request({
      method: "GET",
      url: "/" + path + courseId,
    }).as("searchACourseRequest");
    cy.get("@searchACourseRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title");
    });
  });

  it("Deletes a created course", () => {
    cy.request({
      method: "DELETE",
      url: "/" + path + courseId,
    }).as("deleteACourseRequest");
    cy.get("@deleteACourseRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(204);
    });
  });

  it("Gets All Courses", () => {
    cy.request({
      method: "GET",
      url: "/" + path,
    }).as("searchAllCoursesRequest");
    cy.get("@searchAllCoursesRequest").then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.eq(200);
      expect(res.body.data[0]).to.have.property("id");
      expect(res.body.data[0]).to.have.property("title");
    });
  });
});
