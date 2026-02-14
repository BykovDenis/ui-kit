describe("Table e2e page", () => {
  beforeEach(() => {
    cy.visit("/table");
    cy.viewport(1920, 1080);
  });

  it("Test 1. Renders default headers and rows", () => {
    cy.get("#table-e2e .table-header-name").should("contain.text", "Name");
    cy.get("#table-e2e .table-header-role").should("contain.text", "Role");
    cy.get("#table-e2e .table-header-score").should("contain.text", "Score");
    cy.get("#table-e2e .table-row").should("have.length", 5);
  });

  it("Test 2. Toggles sorting order by name", () => {
    cy.get("#table-e2e .table-row-1-name").should("contain.text", "Alice");

    cy.get("#table-sort-button").click();
    cy.get("#table-e2e .table-row")
      .first()
      .find(".table-cell-name")
      .should("contain.text", "Eve");

    cy.get("#table-sort-button").click();
    cy.get("#table-e2e .table-row")
      .first()
      .find(".table-cell-name")
      .should("contain.text", "Alice");
  });

  it("Test 3. Filters rows by name and resets filter", () => {
    cy.get("#table-filter-input").type("cl");
    cy.get("#table-e2e .table-row").should("have.length", 1);
    cy.get("#table-e2e .table-row")
      .first()
      .find(".table-cell-name")
      .should("contain.text", "Clara");

    cy.get("#table-filter-reset").click();
    cy.get("#table-filter-input").should("have.value", "");
    cy.get("#table-e2e .table-row").should("have.length", 5);
  });

  it("Test 4. Toggles role column visibility", () => {
    cy.get("#table-e2e .table-header-role").should("exist");

    cy.get("#table-toggle-role-column").click();
    cy.get("#table-e2e .table-header-role").should("not.exist");
    cy.get("#table-e2e .table-cell-role").should("have.length", 0);

    cy.get("#table-toggle-role-column").click();
    cy.get("#table-e2e .table-header-role").should("exist");
    cy.get("#table-e2e .table-cell-role").should("have.length", 5);
  });
});
