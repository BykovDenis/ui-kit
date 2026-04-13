describe('Testing Select component', () => {
  beforeEach(() => {
    cy.visit('/switcher');
    cy.viewport(1920, 1080);
  });
  it('Test 1. Switcher change value', () => {
    cy.get('label[for^="q1"]')
      .first()
      .click()
      .invoke('css', 'background-color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq('rgb(139, 88, 203)');
      });
    cy.get('label[for^="q2"]')
      .last()
      .click()
      .invoke('css', 'background-color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq('rgb(139, 88, 203)');
      });
    cy.get('label[for^="q5"]')
      .first()
      .click()
      .invoke('css', 'background-color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq('rgb(139, 88, 203)');
      });
    cy.get('label[for^="q10"]')
      .last()
      .click()
      .invoke('css', 'background-color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq('rgb(139, 88, 203)');
      });
  });

  it('Test 2. Switcher toggles checked state for q1', () => {
    cy.get('input[data-id="q1"][data-name="Да"]').check({ force: true }).should('be.checked');
    cy.get('input[data-id="q1"][data-name="Нет"]').should('not.be.checked');

    cy.get('input[data-id="q1"][data-name="Нет"]').check({ force: true }).should('be.checked');
    cy.get('input[data-id="q1"][data-name="Да"]').should('not.be.checked');
  });

  it('Test 3. Every question has exactly two switcher options', () => {
    cy.get('input[data-id]').then(($inputs) => {
      const grouped: Record<string, number> = {};
      Array.from($inputs).forEach((input) => {
        const id = input.getAttribute('data-id') || '';
        grouped[id] = (grouped[id] || 0) + 1;
      });
      Object.keys(grouped).forEach((id) => {
        expect(grouped[id]).to.eq(2);
      });
    });
  });
});
