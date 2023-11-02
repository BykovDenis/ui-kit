import React from 'react';

describe('The Input component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Test1. Typing text. Testing name and value attributes', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input[data-test=text]').type('fdsfdsfd3er23dEds').blur().invoke('val').should('equal', 'fdsfdsfd3er23dEds');
  });
  it('Test2. Typing numbers', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input[data-test=digits-formatted]').type('12345678').blur().invoke('val').should('equal', '12 345 678');
  });
  it('Test3. Check name and value attributes', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input[data-test=digits-formatted]').type('43232').blur().invoke('val').should('equal', '43 232');
  });
  it('Test4. Typing numbers', () => {
    cy.get('input[data-test=digits]').type('123456ава78').blur().invoke('val').should('equal', '12345678');
  });
  it('Test5. Typing text', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input[data-test=regular-expressions-numbers]')
      .type('fds8908f90ds9f')
      .invoke('val')
      .should('equal', '8908909');
  });
  it('Test6. Typing text', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input[data-test=regular-expressions-symbols]').type('ff12аааа34').invoke('val').should('equal', 'ffаааа');
  });
  it('Test7. Typing text regular expression complixity', () => {
    cy.get('input[data-test=regular-expressions-complixity]').type('fdfd67').invoke('val').should('equal', 'fdfd67');
  });
  it('Test8. Typing text regular expression complixity', () => {
    cy.get('input[data-test=regular-expressions-complixity]').type('666fdfd6').invoke('val').should('equal', 'fdfd6');
  });
  it('Test9. Typing text regular expression complixity', () => {
    cy.get('input[data-test=regular-expressions-complixity]').type('pg_6ewe').invoke('val').should('equal', 'ewe');
  });
  it('Test10. Typing text regular expression complixity', () => {
    cy.get('input[data-test=regular-expressions-complixity]').type('pg_ff6ewe').invoke('val').should('equal', 'ff6ewe');
  });
  it('Test11. Typing text regular expression trim text', () => {
    cy.get('input[data-test=trim]').type('    pg_ff6ewe       ').invoke('val').should('equal', 'pg_ff6ewe');
  });
});
