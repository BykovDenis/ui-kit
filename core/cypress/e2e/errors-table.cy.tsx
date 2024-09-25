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
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#input')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#select')
      .focus()
      .type('seco')
      .then(() => {
        cy.get('#select-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select').should('value', 'second');
          });
      })
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#button')
      .invoke('css', 'backgroundColor')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#icon-button')
      .invoke('css', 'backgroundColor')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#label')
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#radio-1 + label[for="radio-1"]')
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#checkbox-1 + label[for="checkbox-1"]')
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#radio-1 + label[for="radio-1"]').within((element: any) => {
      cy.window().then((window: any) => {
        const labelAfter = window.getComputedStyle(element[0], '::after');
        const backgroundColor = labelAfter.getPropertyValue('background-color');
        expect(backgroundColor).to.equal(themes.dark.palette.primary.main);
      });
    });
    cy.get('#checkbox-1 + label[for="checkbox-1"]').within((element: any) => {
      cy.window().then((window: any) => {
        const labelAfter = window.getComputedStyle(element[0], '::before');
        const backgroundColor = labelAfter.getPropertyValue('background-color');
        expect(backgroundColor).to.equal(themes.dark.palette.primary.main);
      });
    });
    cy.get('label[data-label="element2"]')
      .invoke('css', 'backgroundColor')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#datepicker-dotted').click().type('01042024').blur().should('value', '01.04.2024');
    cy.get('#datepicker-dashed').click().type('20240720').blur().should('value', '2024-07-20');
    cy.get('#set-error')
      .click()
      .then(() => {
        cy.get('#textField')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#input')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#textField')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#datepicker-dotted')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#datepicker-dashed')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#button')
          .invoke('css', 'backgroundColor')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#icon-button')
          .invoke('css', 'backgroundColor')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#label')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
        cy.get('#radio-1 + label[for="radio-1"]')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#checkbox-1 + label[for="checkbox-1"]')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#radio-1 + label[for="radio-1"]').within((element: any) => {
          cy.window().then((window: any) => {
            const labelAfter = window.getComputedStyle(element[0], '::after');
            const backgroundColor = labelAfter.getPropertyValue('background-color');
            expect(backgroundColor).to.equal(themes.dark.palette.secondary.main);
          });
        });
        cy.get('#checkbox-1 + label[for="checkbox-1"]').within((element: any) => {
          cy.window().then((window: any) => {
            const labelAfter = window.getComputedStyle(element[0], '::before');
            const backgroundColor = labelAfter.getPropertyValue('background-color');
            expect(backgroundColor).to.equal(themes.dark.palette.secondary.main);
          });
        });
        cy.get('label[data-label="element2"]')
          .invoke('css', 'backgroundColor')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.secondary.main);
          });
      });
    cy.get('#set-error')
      .click()
      .then(() => {
        cy.get('#textField')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#input')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#textField')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#datepicker-dotted')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#datepicker-dashed')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#button')
          .invoke('css', 'backgroundColor')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.primary.main);
          });
        cy.get('#icon-button')
          .invoke('css', 'backgroundColor')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.primary.main);
          });
        cy.get('#label')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#radio-1 + label[for="radio-1"]')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#checkbox-1 + label[for="checkbox-1"]')
          .invoke('css', 'color')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.baseFontColor);
          });
        cy.get('#radio-1 + label[for="radio-1"]').within((element: any) => {
          cy.window().then((window: any) => {
            const labelAfter = window.getComputedStyle(element[0], '::after');
            const backgroundColor = labelAfter.getPropertyValue('background-color');
            expect(backgroundColor).to.equal(themes.dark.palette.primary.main);
          });
        });
        cy.get('#checkbox-1 + label[for="checkbox-1"]').within((element: any) => {
          cy.window().then((window: any) => {
            const labelAfter = window.getComputedStyle(element[0], '::before');
            const backgroundColor = labelAfter.getPropertyValue('background-color');
            expect(backgroundColor).to.equal(themes.dark.palette.primary.main);
          });
        });
        cy.get('label[data-label="element2"]')
          .invoke('css', 'backgroundColor')
          .then((color: string) => {
            expect(color).to.eq(themes.dark.palette.primary.main);
          });
      });
  });
  it('Test2. TextField component', () => {
    cy.get('#textField')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#textField')
      .blur()
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#textField')
      .focus()
      .type('{backspace}{backspace}{backspace}', { delay: 1000 })
      .blur()
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.secondary.main);
      });
  });
  it('Test3. Input component', () => {
    cy.get('#input')
      .focus()
      .type('Hello World')
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.primary.main);
      });
    cy.get('#input')
      .blur()
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.baseFontColor);
      });
    cy.get('#input')
      .focus()
      .type('{backspace}{backspace}{backspace}')
      .blur()
      .invoke('css', 'color')
      .then((bgColor: string) => {
        expect(bgColor).to.eq(themes.dark.palette.secondary.main);
      });
  });
  it('Test4. Select component', () => {
    cy.get('#select')
      .click()
      .type('thi')
      .then(() => {
        cy.get('#select-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select').should('value', 'third');
          });
      })
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.secondary.main);
      });
    cy.get('div[data-test="select"] button[data-test="btn-delete-value"]')
      .click()
      .then(() => {
        cy.get('#select').should('value', '');
      });
    cy.get('#select')
      .focus()
      .type('seco')
      .then(() => {
        cy.get('#select-list div:first button')
          .as('btn')
          .click()
          .then(() => {
            cy.get('#select').should('value', 'second');
          });
      })
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.baseFontColor);
      });
  });
  it('Test5. Datepicker component', () => {
    cy.get('#datepicker-dotted').click().type('01042024').blur().should('value', '01.04.2024');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker-dotted').should('value', '');
    cy.get('#datepicker-dotted')
      .click()
      .type('01142024')
      .blur()
      .should('value', '01.14.2024')
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.secondary.main);
      });
    cy.get('#datepicker-dashed').click().type('20240720').blur().should('value', '2024-07-20');
    cy.get('div[data-test="datepicker-dashed"] button[data-test="btn-delete-value"]')
      .as('btn')
      .parent()
      .click({ multiple: true });
    cy.get('#datepicker-dashed').should('value', '');
    cy.get('#datepicker-dashed')
      .click()
      .type('20241140')
      .blur()
      .should('value', '2024-11-40')
      .invoke('css', 'color')
      .then((color: string) => {
        expect(color).to.eq(themes.dark.palette.secondary.main);
      });
  });
});
