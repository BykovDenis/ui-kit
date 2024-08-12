describe('Testing Select component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/select');
    cy.viewport(1920, 1080);
  });
  it('Test 1. Select text value', () => {
    cy.get('#select-text')
      .focus()
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
      .focus()
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
      .focus()
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
});
