// https://docs.cypress.io/api/introduction/api.html

describe("small Talk landing page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept('GET', "https://uselessfacts.jsph.pl/random.json?language=en", {
      statusCode: 201,
      fixture: "randomFact.json"
    })
    cy.intercept('GET', "https://www.thecocktaildb.com/api/json/v1/1/random.php", {
      statusCode: 201,
      fixture: "randomDrink.json"
    })
  })
  it("should visit the landing page with title", () => {
    cy.contains("small TALK");
  });

  it("should have correct nav buttons", () => {
    cy.get("nav").first().contains("Random Party Boosters")
    cy.get("nav").last().contains("Saved Party Boosters")
  });

  it("should have correct fact, song and drink buttons", () => {
    cy.get("button").first().contains("Give me a new fact")
    cy.get("button").eq(1).contains("Give me a new song")
    cy.get("button").last().contains("Give me a new drink")
  });

  it("should give me a new fact when I click the new fact button", () => {
    cy.get("button").first().click()
    cy.get(".booster-card").contains("The average person spends about two years on the phone in a lifetime.")
  });

  it("should give me a new drink when I click the new drink button", () => {
    cy.get("button").last().click()
    cy.get(".booster-card").contains("Amaretto Sunrise")
    cy.get(".booster-card").contains("1 cl Amaretto")
    cy.get(".booster-card").contains("Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise")
  });
});
