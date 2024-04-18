describe('Testing Select component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Test 1. Select number value 1', () => {
    cy.get('#select-digits-input')
      .focus()
      .then(() => {
        cy.get('#select-digits-list div:first button')
          .as('btn')
          .parent()
          .then(() => {
            cy.get('#select-digits-input').should('value', 1);
          });
      });
  });
  // it('Test 2. Select number value 0', () => {
  //   cy.get('#select-digits-input')
  //     .click()
  //     .then(() => {
  //       cy.get('#select-digits-list div:last button')
  //         .as('btn')
  //         .parent()
  //         .then(() => {
  //           cy.get('#select-digits-input').should('have.value', 0);
  //         });
  //     });
  // });
  // it('Test 3. Select number value 5', () => {
  //   cy.get('#select-digits-input')
  //     .click()
  //     .then(() => {
  //       cy.get('#select-digits-list div:nth-child(5) button')
  //         .click()
  //         .then(() => {
  //           cy.get('#select-digits-input').should('have.value', 5);
  //         });
  //     });
  // });
  // it('Test 4. Clean value', () => {
  //   cy.get('#select-digits button[data-test="btn-delete-value"]')
  //     .click()
  //     .then(() => {
  //       cy.get('#select-digits-input').should('have.value', '');
  //     });
  // });
  // it('Test 5. Create new value', () => {
  //   cy.get('#select-digits button[data-test="btn-delete-value"]')
  //     .click()
  //     .then(() => {
  //       cy.get('#select-digits-input').should('have.value', '');
  //     })
  //     .then(() => {
  //       cy.get('#select-digits-input')
  //         .type('333')
  //         .then(() => {
  //           cy.get('#select-digits-list div:first button')
  //             .click()
  //             .then(() => {
  //               cy.get('#select-digits-input').should('have.value', 333);
  //             });
  //         });
  //     });
  // });
});
