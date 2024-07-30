describe('Testing Select component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/select');
  });
  it('Test 1. Switcher change value', () => {
    cy.get('[id^="g1"]')
      .click()
      .then(() => {
        cy.get('#select-text-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select-text-input').should('value', 'three');
          });
      });
  });
});
