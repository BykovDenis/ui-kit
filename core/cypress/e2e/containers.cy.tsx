import { themes } from '../../packages/styles/src/themes';

describe('The containers component', () => {
  beforeEach(() => {
    cy.visit('/containers');
    cy.viewport(1920, 1080);
  });
  it('Test 1. FlexContainer', () => {
    cy.get('div#container1')
      .first()
      .click()
      .invoke('width')
      .then(widthValue => {
        expect(widthValue).to.eq(340);
      });
    cy.get('div#container2')
      .first()
      .click()
      .invoke('width')
      .then(widthValue => {
        expect(widthValue).to.eq(740);
      });
    cy.get('div#container3')
      .first()
      .click()
      .invoke('width')
      .then(widthValue => {
        expect(widthValue).to.eq(340);
      });
    cy.get('div#container4')
      .first()
      .click()
      .invoke('width')
      .then(widthValue => {
        expect(widthValue).to.eq(740);
      });
  });

  it('Test 2. Has expected table headers', () => {
    cy.contains('td', 'Header 1').should('exist');
    cy.contains('td', 'Header').should('exist');
    cy.contains('td', 'Header 3').should('exist');
  });

  it('Test 3. Keeps important row values visible', () => {
    cy.get('#container1').should('contain.text', 'American Monte Carlo Number Of Paths');
    cy.get('#container2').should('contain.text', '000');
    cy.get('#container3').should('contain.text', 'Typologies');
    cy.get('#container4').should('contain.text', 'XXXXX');
  });

  it('Test 4. Container alignment styles are applied', () => {
    cy.get('#container1')
      .invoke('css', 'justify-content')
      .then((justifyContent: string) => {
        expect(justifyContent).to.eq('flex-end');
      });

    cy.get('#container2')
      .invoke('css', 'justify-content')
      .then((justifyContent: string) => {
        expect(justifyContent).to.eq('flex-start');
      });
  });
});
