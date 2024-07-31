describe('Testing Select component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/switcher');
    cy.viewport(1920, 1080);
  });
  it('Test 1. Switcher change value', () => {
    cy.get('label[for^="q1"]')
      .first()
      .click()
      .invoke('css', 'background-color')
      .then(bgColor => {
        expect(bgColor).to.eq('rgb(8, 166, 82)');
      });
    cy.get('label[for^="q2"]')
      .last()
      .click()
      .invoke('css', 'background-color')
      .then(bgColor => {
        expect(bgColor).to.eq('rgb(8, 166, 82)');
      });
    cy.get('label[for^="q5"]')
      .first()
      .click()
      .invoke('css', 'background-color')
      .then(bgColor => {
        expect(bgColor).to.eq('rgb(8, 166, 82)');
      });
    cy.get('label[for^="q10"]')
      .last()
      .click()
      .invoke('css', 'background-color')
      .then(bgColor => {
        expect(bgColor).to.eq('rgb(8, 166, 82)');
      });
  });
});
