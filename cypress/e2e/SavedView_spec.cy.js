describe("small Talk Saved View", () => {
    beforeEach(() => {
        cy.intercept('GET', "https://uselessfacts.jsph.pl/random.json?language=en", {
            statusCode: 201,
            fixture: "randomFact.json"
        })
        cy.intercept('GET', "https://www.thecocktaildb.com/api/json/v1/1/random.php", {
            statusCode: 201,
            fixture: "randomDrink.json"
        })
        cy.visit("/")
        cy.get("button").first().click()
        cy.get(".unfilled-favorite-star").click()
        cy.get("button").last().click()
        cy.get(".unfilled-favorite-star").click()
        cy.get(".router-link").last().click()
    })

    it("should show a saved fact booster in saved view by default", () => {
        cy.get(".booster-card").contains("The average person spends about two years on the phone in a lifetime.")
        cy.get("p").should("have.class","filled-favorite-star")
      })

    it("should show a saved drink booster in saved view when clicking on saved drinks", () => {
        cy.get(".booster-card").contains("The average person spends about two years on the phone in a lifetime.")
        cy.get("button").last().click()
        cy.get(".booster-card").last().contains("Amaretto Sunrise")
        cy.get("p").should("have.class","filled-favorite-star")
      })

    it("should be able to unsave boosters from saved views", () => {
        cy.get(".filled-favorite-star").click()
        cy.get(".booster-card").should("not.exist")
        cy.get("button").last().click()
        cy.get(".filled-favorite-star").click()
        cy.get(".booster-card").should("not.exist")
    })
})