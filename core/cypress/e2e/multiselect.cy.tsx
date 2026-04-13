describe('Testing MultiSelect component', () => {
  beforeEach(() => {
    cy.visit('/multi-select');
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
        cy.get('[data-cy="multi-select-2-search-input"]').click().type('B1');
        cy.get('[data-cy="multi-select-2-list"]').find('button[data-label="B1_SH_UK"]').click();
        cy.get('[data-cy="multi-select-2-list"]').find('[data-label="B1_OL_UK"]').click();
        cy.get('[data-cy="multi-select-2-list"]').find('[data-label="B1_SC_UK"]').click();
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

  it('Test 5. MultiSelect objects close list by Escape', () => {
    cy.get('[data-cy="multi-select-2-btn-expand"]').click();
    cy.get('[data-cy="multi-select-2-toggle-container"]').should('exist');

    cy.get('body').trigger('keyup', { key: 'Escape', code: 'Escape', keyCode: 27 });
    cy.get('[data-cy="multi-select-2-toggle-container"]').should('not.exist');
  });

  it('Test 6. MultiSelect objects supports select all and unselect all', () => {
    cy.get('[data-cy="multi-select-2-btn-expand"]').click();
    cy.contains('button', 'Select all').click();

    cy.get('[data-cy="multi-select-2-selected-elements"]').find('div').should('have.length.greaterThan', 4);

    cy.get('[data-cy="multi-select-2-btn-expand"]').click();
    cy.contains('button', 'Unselect all').click();
    cy.get('[data-cy="multi-select-2-selected-elements"]').find('div').should('have.length', 0);
  });

  it('Test 7. Disabled multiselects do not open', () => {
    cy.get('[data-cy="selected-metrics-objects-btn-expand"]').should('be.disabled');
    cy.get('[data-cy="selected-metrics-objects-btn-expand"]').click({ force: true });
    cy.get('[data-cy="selected-metrics-objects-toggle-container"]').should('not.exist');

    cy.get('[data-cy="multi-select-strings-btn-expand"]').should('be.disabled');
    cy.get('[data-cy="multi-select-strings-btn-expand"]').click({ force: true });
    cy.get('[data-cy="multi-select-strings-toggle-container"]').should('not.exist');
  });

  it('Test 8. Clear filters button resets string multiselect', () => {
    cy.get('[data-cy="multi-select-1-btn-expand"]').click();
    cy.contains('button', 'Select all').click();

    cy.get('#multi-select-1').find('button[id^="multi-select-1-"]').should('have.length.greaterThan', 2);
    cy.contains('button', 'Clear filters').click();
    cy.get('#multi-select-1').find('button[id^="multi-select-1-"]').should('have.length', 0);
  });
});
