describe("Popup e2e page", () => {
  beforeEach(() => {
    cy.visit("/popup-e2e");
    cy.viewport(1920, 1080);
  });

  it("Test 1. Opens and closes popup by external buttons", () => {
    cy.get("#popup-e2e-content").should("not.exist");
    cy.get("#popup-e2e-open").click();
    cy.get("#popup-e2e-content").should("exist");
    cy.get("#popup-e2e-text").should("have.text", "Popup body");

    cy.get("#popup-e2e-close").click();
    cy.get("#popup-e2e-content").should("not.exist");
  });

  it("Test 2. Closes popup by inner button", () => {
    cy.get("#popup-e2e-open").click();
    cy.get("#popup-e2e-content").should("exist");
    cy.get("#popup-e2e-inner-close").click();
    cy.get("#popup-e2e-content").should("not.exist");
  });

  it("Test 3. Applies z-index change", () => {
    cy.get("#popup-e2e-open").click();
    cy.get("#popup-e2e-content").parent().should("have.css", "z-index", "9999");

    cy.get("#popup-e2e-zindex-toggle").click();
    cy.get("#popup-e2e-content").parent().should("have.css", "z-index", "10001");
  });
});

