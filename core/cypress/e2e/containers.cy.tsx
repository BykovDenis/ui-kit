import { themes } from '../../packages/styles/src/themes';

describe('The containers component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/containers');
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
});
