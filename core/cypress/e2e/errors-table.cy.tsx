import { themes } from '../../packages/styles/src/themes';

describe('The TextField component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/errors-state');
    cy.viewport(1920, 1080);
  });
  it('Test1. Set error all components', () => {
    cy.get('#textField')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#input')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#set-error').click();
  });
  it('Test2. TextField component', () => {
    cy.get('#textField')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#textField')
      .blur()
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#textField')
      .focus()
      .type('{backspace}{backspace}{backspace}', { delay: 1000 })
      .blur()
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.secondary.main);
      });
  });
  it('Test3. Input component', () => {
    cy.get('#input')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#input')
      .blur()
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#input')
      .focus()
      .type('{backspace}{backspace}{backspace}')
      .blur()
      .invoke('css', 'color')
      .then(bgColor => {
        expect(bgColor).to.eq(themes.dark.palette.secondary.main);
      });
  });
});
