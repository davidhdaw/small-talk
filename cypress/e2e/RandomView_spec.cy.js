// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
  })
  it("should have a title", () => {
    cy.contains("small TALK");
  });
  it("should have correct nav buttons", () => {
    cy.get("nav").first().contains("Random Party Boosters")
    cy.get("nav").last().contains("Saved Party Boosters")
  });
});
