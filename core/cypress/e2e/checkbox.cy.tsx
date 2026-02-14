describe("Checkbox e2e page", () => {
  beforeEach(() => {
    cy.visit("/checkbox-e2e");
    cy.viewport(1920, 1080);
  });

  it("Test 1. Toggles checkbox by label click", () => {
    cy.get("#checkbox-e2e-accept").should("not.be.checked");
    cy.get('label[for="checkbox-e2e-accept"]').click();
    cy.get("#checkbox-e2e-accept").should("be.checked");
    cy.get("#checkbox-e2e-state").should("contain.text", "accept:true");
  });

  it("Test 2. Disabled checkbox stays unchecked", () => {
    cy.get("#checkbox-e2e-disabled").should("be.disabled").and("not.be.checked");
    cy.get('label[for="checkbox-e2e-disabled"]').click({ force: true });
    cy.get("#checkbox-e2e-disabled").should("not.be.checked");
  });

  it("Test 3. Reset button clears controlled values", () => {
    cy.get('label[for="checkbox-e2e-accept"]').click();
    cy.get('label[for="checkbox-e2e-newsletter"]').click();
    cy.get("#checkbox-e2e-reset").click();

    cy.get("#checkbox-e2e-accept").should("not.be.checked");
    cy.get("#checkbox-e2e-newsletter").should("not.be.checked");
    cy.get("#checkbox-e2e-state").should("contain.text", "accept:false;newsletter:false");
  });
});

