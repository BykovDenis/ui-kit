describe('Testing MultiSelect component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/multi-select');
    cy.viewport(1920, 1080);
  });
  it('Test 1. MultiSelect. Select elements', () => {
    cy.get('[data-cy="multi-select-2-btn-expand"]')
      .click()
      .then(() => {
        cy.get('#multi-select-2').find('button[data-label="B1_SH_UK"]').click();
        cy.get('#multi-select-2').find('button[data-label="B1_OL_UK"]').click();
        cy.get('#multi-select-2').find('button[data-label="B1_SC_UK"]').click();
        cy.get('[data-cy="multi-select-2-selected-elements"]').find('div').should('have.length', 1);
        cy.get('#multi-select-2').find('[data-cy="multi-select-2-search-input"]').click().type('B1');
        cy.get('[data-cy="multi-select-2-list"]').find('button[data-label="B1_SH_UK"]').click();
        cy.get('#multi-select-2').find('[data-label="B1_OL_UK"]').click();
        cy.get('#multi-select-2').find('[data-label="B1_SC_UK"]').click();
        cy.get('[data-cy="multi-select-2-selected-elements"]').find('div').should('have.length', 4);
        cy.get('#multi-select-2-2-button').click();
        cy.get('[data-cy="multi-select-2-selected-elements"]').find('div').should('have.length', 3);
      });
  });
  it('Test 2. MultiSelect. Disable elements', () => {
    cy.get('#selected-metrics-objects')
      .invoke('removeAttr', 'disabled')
      .find('[data-cy="selected-metrics-objects-toggle-container"]')
      .should('have.length', 0);
  });
  it('Test 3. MultiSelect. Disable elements', () => {
    cy.get('#multi-select-strings')
      .invoke('removeAttr', 'disabled')
      .find('[data-cy="multi-select-strings-toggle-container"]')
      .should('have.length', 0);
  });
  it('Test 4. MultiSelect. Filters', () => {
    cy.get('[data-cy="multi-select-2-btn-expand"]')
      .click()
      .then(() => {
        cy.get('[data-cy="multi-select-2-list"]').find('div > button').should('have.length', 7);
        cy.get('[data-cy="multi-select-2-search-input"]').type('BOO');
        cy.get('[data-cy="multi-select-2-list"]').find('div > button').should('have.length', 3);
        cy.get('[data-test="btn-delete-value"]').click();
        cy.get('[data-cy="multi-select-2-list"]').find('div > button').should('have.length', 7);
        cy.get('[data-cy="multi-select-2-search-input"]').should('value', '');
      });
  });
});
