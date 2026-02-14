describe("Tabs e2e page", () => {
  beforeEach(() => {
    cy.visit("/tabs-e2e");
    cy.viewport(1920, 1080);
  });

  it("Test 1. Shows default tab state", () => {
    cy.get("#tabs-e2e-state").should("have.text", "overview");
    cy.get("#tabs-e2e-panel").should("have.text", "Overview panel");
  });

  it("Test 2. Switches to details tab by click", () => {
    cy.contains("button", "Details").click();
    cy.get("#tabs-e2e-state").should("have.text", "details");
    cy.get("#tabs-e2e-panel").should("have.text", "Details panel");
  });

  it("Test 3. Disabled tab does not change active state", () => {
    cy.contains("button", "History").should("be.disabled").click({ force: true });
    cy.get("#tabs-e2e-state").should("have.text", "overview");
    cy.get("#tabs-e2e-panel").should("have.text", "Overview panel");
  });
});

