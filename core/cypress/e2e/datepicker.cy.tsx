describe('The Datepicker component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/datepicker');
    cy.viewport(1920, 1080);
  });
  it('Test1. Selection by click text. Testing input value changing attributes by onChange event handler. Mask dd.MM.yyyy', () => {
    // Typing value
    cy.get('#datepicker1').focus().type('01.04.2024').blur().should('value', '01.04.2024');
    // Remove values
    // cy.get('button[data-test="btn-delete-value"]').as('btn').click();
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent();
    cy.get('button[data-test="btn-delete-value"]').as('btn').click({ multiple: true });
    cy.get('#datepicker1').should('value', '');
  });
  it('Test2. Selection by click text. Testing input value changing attributes by onChange event handler. Mask yyyy-MM-dd', () => {
    // Typing value
    cy.get('#datepicker2').focus().type('2024-04-01').blur().should('value', '2024-04-01');
    // Remove values
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent();
    cy.get('button[data-test="btn-delete-value"]').as('btn').click({ multiple: true });
    cy.get('#datepicker2').should('value', '');
  });
  it('Test3. Selection by click. Testing value changing attributes by onChange event handler. Mask dd.MM.yyyy', () => {
    cy.get('#datepicker1').focus().type('01.04.2024').blur().should('value', '01.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('button[name="10"]').as('btn').click();
    cy.get('#datepicker1').should('value', '10.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('button[name="23"]').as('btn').click();
    cy.get('#datepicker1').should('value', '23.04.2024');
  });
  it('Test4. Selection by click. Testing value changing attributes by onChange event handler. Mask yyyy-MM-dd', () => {
    cy.get('#datepicker2').focus().type('2024-02-01').blur().should('value', '2024-02-01');
    cy.get('#datepicker2').focus().click();
    cy.get('button[name="28"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-02-28');
    cy.get('#datepicker2').focus().click();
    cy.get('button[name="13"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-02-13');
  });
  it('Test5. Test min-max date', () => {
    cy.get('#datepicker3').focus().click();
    cy.get('button[data-test-name="setToday"]').should('be.disabled');
  });
});
