describe("Radio e2e page", () => {
  beforeEach(() => {
    cy.visit("/radio-e2e");
    cy.viewport(1920, 1080);
  });

  it("Test 1. Has default selected value", () => {
    cy.get("#radio-e2e-medium").should("be.checked");
    cy.get("#radio-e2e-state").should("have.text", "medium");
  });

  it("Test 2. Changes selected option by label click", () => {
    cy.get('label[for="radio-e2e-low"]').click();
    cy.get("#radio-e2e-low").should("be.checked");
    cy.get("#radio-e2e-medium").should("not.be.checked");
    cy.get("#radio-e2e-state").should("have.text", "low");
  });

  it("Test 3. Disabled radio remains unchecked", () => {
    cy.get("#radio-e2e-disabled").should("be.disabled").and("not.be.checked");
    cy.get('label[for="radio-e2e-disabled"]').click({ force: true });
    cy.get("#radio-e2e-disabled").should("not.be.checked");
  });
});

