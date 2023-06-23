import React from 'react';

  describe('The TextField component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001')
    })
    it('Test1. Typing numbers', () => {
      // mount(<Input type="number" name="input name" value="123" />)
        cy.get('input[data-test=text-field-digits]')
          .type('1234')
          .invoke('val')
          .should('equal', '1234')
    })
    it('Test2. Typing text', () => {
      // mount(<Input type="number" name="input name" value="123" />)
      cy.get('input[data-test=text-field-regular-expressions]')
        .type('ff12аааа34')
        .invoke('val')
        .should('equal', 'ffаааа')
    })
    it('Test3. Typing text regular expression complixity', () => {
      cy.get('input[data-test=text-field-regular-expressions-complixity]')
        .type('fdfd67')
        .invoke('val')
        .should('equal', 'fdfd67')
    });
    it('Test4. Typing text regular expression complixity', () => {
      cy.get('input[data-test=text-field-regular-expressions-complixity]')
        .type('666fdfd6')
        .invoke('val')
        .should('equal', 'fdfd6')
    });
    it('Test5. Typing text regular expression complixity', () => {
      cy.get('input[data-test=text-field-regular-expressions-complixity]')
        .type('pg_6ewe')
        .invoke('val')
        .should('equal', 'ewe')
    });
    it('Test6. Typing text regular expression complixity', () => {
      cy.get('input[data-test=text-field-regular-expressions-complixity]')
        .type('pg_ff6ewe')
        .invoke('val')
        .should('equal', 'ff6ewe')
    });
  });