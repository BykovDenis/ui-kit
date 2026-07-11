describe('Testing Select component', () => {
  beforeEach(() => {
    cy.visit('/select');
    cy.viewport(1920, 1080);
  });
  it('Test 1. Select text value', () => {
    cy.get('#select-text')
      .click()
      .type('thr')
      .then(() => {
        cy.get('#select-text-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select-text').should('value', 'three');
          });
      });
  });
  it('Test 2. Select number value', () => {
    cy.get('#select-digits')
      .click()
      .type('32')
      .then(() => {
        cy.get('#select-digits-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select-digits').should('value', 532);
          });
      });
  });
  it('Test 3. Select object value', () => {
    cy.get('#select-object')
      .click()
      .type('юль')
      .then(() => {
        cy.get('#select-object-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select-object').should('value', 'Июль');
          });
      });
  });
  it('Test 4. Test new element', () => {
    cy.get('#select-text')
      .click()
      .type('vne')
      .then(() => {
        cy.get('#select-text-list').find('button').should('have.length', 4);
        cy.get('#select-text-list').find('button').last().contains('Create new');
        cy.get('#select-text-list div:last button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select-text').should('value', 'vne');
          });
        cy.get('[data-test="btn-delete-value"]')
          .as('btn')
          .parent()
          .click({ multiple: true })
          .then(() => {
            cy.get('#select-text').should('value', '');
          });
      });
    cy.get('#select-text')
      .click()
      .type('vnekb')
      .then(() => {
        cy.get('#select-text-list').find('button').should('have.length', 1);
        cy.get('[data-test="btn-delete-value"]')
          .as('btn')
          .parent()
          .click({ multiple: true })
          .then(() => {
            cy.get('#select-text').should('value', '');
          });
      });
    cy.get('#select-text')
      .click()
      .type('vnek')
      .then(() => {
        cy.get('#select-text-list').find('button').should('have.length', 3);
        cy.get('#select-text-list').find('button').last().contains('Create new');
      });
    cy.get('#select-text')
      .click()
      .type('b1')
      .then(() => {
        cy.get('#select-text-list').find('button').should('have.length', 1);
        cy.get('#select-text-list').find('button').last().contains('Create new');
      });
  });
  it('Test 5. Click component by disabled component', () => {
    cy.get('#select-disabled')
      .click({ force: true })
      .then(() => {
        cy.get('#select-disabled-list-items').should('have.length', 0);
      });
  });
  it('Test 6. Click label by disabled component', () => {
    cy.get('label[for="select-disabled"]')
      .click({ force: true })
      .then(() => {
        cy.get('#select-disabled-list-items').should('have.length', 0);
      });
  });
  it('Test 7. Click component by disabled component', () => {
    cy.get('#select-objects-disabled')
      .click({ force: true })
      .then(() => {
        cy.get('#select-objects-disabled-list-items').should('have.length', 0);
      });
  });
  it('Test 8. Click label by disabled component', () => {
    cy.get('label[for="select-objects-disabled"]')
      .click({ force: true })
      .then(() => {
        cy.get('#select-objects-disabled-list-items').should('have.length', 0);
      });
  });

  it('Test 9. Close options list by Escape key', () => {
    cy.get('#select-text').click().type('th');
    cy.get('#select-text-list-items').should('exist');

    cy.get('body').trigger('keyup', { key: 'Escape', code: 'Escape', keyCode: 27 });
    cy.get('#select-text-list-items').should('not.exist');
  });

  it('Test 10. Close options list by outside click', () => {
    cy.get('#select-text').click().type('th');
    cy.get('#select-text-list-items').should('exist');

    cy.get('body').click(0, 0);
    cy.get('#select-text-list-items').should('not.exist');
  });

  it('Test 11. Clear selected text value by remove button', () => {
    cy.get('#select-text')
      .click()
      .type('one')
      .then(() => {
        cy.get('#select-text-list div:first button').click();
        cy.get('#select-text').should('value', 'one');
      });

    cy.get('#select-text')
      .closest('div')
      .parent()
      .find('button[data-test="btn-delete-value"]')
      .first()
      .click({ force: true });

    cy.get('#select-text').should('value', '');
  });

  it('Test 12. Exposes the combobox/listbox ARIA contract', () => {
    cy.get('#select-text')
      .should('have.attr', 'role', 'combobox')
      .and('have.attr', 'aria-expanded', 'false')
      .and('have.attr', 'aria-controls', 'select-text-list')
      .and('have.attr', 'aria-autocomplete', 'list');

    cy.get('#select-text').click();
    cy.get('#select-text').should('have.attr', 'aria-expanded', 'true');
    cy.get('#select-text-list').should('have.attr', 'role', 'listbox');
    cy.get('#select-text-list [role="option"]').should('have.length.greaterThan', 0);
  });

  it('Test 13. Selects an option with keyboard arrows and Enter', () => {
    cy.get('#select-text').click();
    cy.get('#select-text-list [role="option"]').should('have.length.greaterThan', 1);

    // ArrowDown highlights an option and points aria-activedescendant at it
    cy.get('#select-text').type('{downarrow}');
    cy.get('#select-text')
      .invoke('attr', 'aria-activedescendant')
      .should('match', /^select-text-option-\d+$/);

    // Enter commits the highlighted option and closes the list
    cy.get('#select-text').type('{downarrow}{enter}');
    cy.get('#select-text').should('have.attr', 'aria-expanded', 'false');
    cy.get('#select-text').invoke('val').should('not.be.empty');
  });

  it('Test 14. Closes the list with Escape after keyboard navigation', () => {
    cy.get('#select-text').click();
    cy.get('#select-text').type('{downarrow}');
    cy.get('#select-text-list').should('exist');
    cy.get('#select-text').type('{esc}');
    cy.get('#select-text').should('have.attr', 'aria-expanded', 'false');
  });
});
