describe('The TextField component', () => {
  beforeEach(() => {
    cy.visit('/textfield');
    cy.viewport(1920, 1080);
  });
  it('Test1. Typing numbers', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input#text-field-digits-separated')
      .focus()
      .type('234')
      .blur()
      .invoke('val')
      .should('equal', '234'.toString());
  });
  it('Test2. Typing text', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input#text-field-digits').click().type('ff12аааа34').invoke('val').should('equal', '1234');
  });
  it('Test3. Typing text regular expression', () => {
    cy.get('input[data-test=text-field-regular-expressions]')
      .focus()
      .type('fdfd67')
      .invoke('val')
      .should('equal', 'fdfd');
  });
  it('Test4. Typing text regular expression complixity', () => {
    cy.get('input#text-field-regular-expressions-complixity')
      .focus()
      .type('666fdfd6')
      .invoke('val')
      .should('equal', 'fdfd6');
  });
  it('Test5. Typing text regular expression complixity', () => {
    cy.get('input[data-test=text-field-regular-expressions-complixity]')
      .focus()
      .type('pg_6ewe')
      .invoke('val')
      .should('equal', 'ewe');
  });
  it('Test6. Typing text regular expression complixity', () => {
    cy.get('input[data-test=text-field-regular-expressions-complixity]')
      .focus()
      .type('pg_ff6ewe')
      .invoke('val')
      .should('equal', 'ff6ewe');
  });

  it('Test7. Clear button removes value for numeric text-field', () => {
    cy.get('#text-field-digits').focus().type('12345').invoke('val').should('equal', '12345');
    cy.get('#text-field-digits')
      .closest('div')
      .parent()
      .find('button[data-test="btn-delete-value"]')
      .first()
      .click({ force: true });
    cy.get('#text-field-digits').invoke('val').should('equal', '');
  });

  it('Test8. Label click focuses corresponding input', () => {
    cy.get('label[for="text-field-digits-separated"]').click();
    cy.focused().should('have.attr', 'id', 'text-field-digits-separated');
  });
});
