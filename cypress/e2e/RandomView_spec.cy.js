// https://docs.cypress.io/api/introduction/api.html

describe("small Talk landing page (Random View)", () => {
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
    cy.intercept('GET', "https://icanhazdadjoke.com/", {
      statusCode: 201,
      fixture: "randomJoke.json"
    })
  })

  it("should visit the landing page with title", () => {
    cy.contains("small TALK")
  });

  it("should have correct nav", () => {
    cy.get("nav").contains("Random Party Boosters")
    cy.get("nav").contains("Saved Party Boosters")
  });

  it("should have correct fact, joke and drink buttons", () => {
    cy.get("button").first().contains("Give me a new fact")
    cy.get("button").eq(1).contains("Give me a new joke")
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

  it("should give me a new joke when I click the new joke button", () => {
    cy.get("button").eq(1).click()
    cy.get(".booster-card").contains("joke")
    cy.get(".booster-card").contains("Why did the octopus beat the shark in a fight? Because it was well armed.")
  });

  it("should be able to save fact booster", () => {
    cy.get("button").first().click()
    cy.get("p").should("have.class","unfilled-favorite-star")
    cy.get(".unfilled-favorite-star").first().click()
    cy.get("p").should("have.class","filled-favorite-star")
  })

  it("should be able to unsave boosters in Random View", () => {
    cy.get("button").first().click()
    cy.get("p").should("have.class","unfilled-favorite-star")
    cy.get(".unfilled-favorite-star").first().click()
    cy.get("p").should("have.class","filled-favorite-star")
    cy.get(".filled-favorite-star").first().click()
    cy.get("p").should("have.class","unfilled-favorite-star")
  })

  it("should be able to save drink in Random View", () => {
    cy.get("button").last().click()
    cy.get("p").should("have.class","unfilled-favorite-star")
    cy.get(".unfilled-favorite-star").first().click()
    cy.get("p").should("have.class","filled-favorite-star")
  })  

  it("should be able to save joke in Random View", () => {
    cy.get("button").eq(1).click()
    cy.get("p").should("have.class","unfilled-favorite-star")
    cy.get(".unfilled-favorite-star").first().click()
    cy.get("p").should("have.class","filled-favorite-star")
  }) 

  it("should not show saved boosters in saved view if nothing has been saved",() => {
    cy.get(".router-link").last().click()
    cy.get(".booster-card").should("not.exist")
  })
});
