// cypress/component/textfield.component.cy.tsx
import { mount } from 'cypress/react';
import getNewReactThemeContext from '../../packages/styles/src';
import { themes } from '../../packages/styles/src/themes';
import TextField from '../../packages/textfield/src';
import { useState } from 'react';

describe('TextField', () => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  it('renders correctly with label and value', () => {
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <TextField label="Username" value="Denis" data-test="textfield" />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=textfield]').should('exist').and('have.value', 'Denis');
    cy.contains('Username').should('exist');
  });

  it('supports ref forwarding to underlying input', () => {
    const ref = { current: null as HTMLInputElement | null };

    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <TextField ref={ref} label="Email" data-test="textfield-ref" />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=textfield-ref]').should('exist').then(() => {
      expect(ref.current).to.exist;
      ref.current?.focus();
      expect(document.activeElement).to.eq(ref.current);
    });
  });

  it('clears value when delete button clicked (controlled)', () => {
    const Wrapper = () => {
      const [val, setVal] = useState('Denis');
      return (
        <ReactThemeContext.Provider value={themes.dark}>
          <TextField
            label="Name"
            value={val}
            data-test="textfield-delete"
            onRemove={() => setVal('')}
          />
        </ReactThemeContext.Provider>
      );
    };

    mount(<Wrapper />);

    cy.get('input[data-test="textfield-delete"]').should('have.value', 'Denis');
    cy.get('[data-test="btn-delete-value"]').click({ force: true });
    cy.get('input[data-test="textfield-delete"]').should('have.value', '');
  });

  it('shows shrinked label when focused', () => {
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <TextField label="Password" data-test="textfield-label" />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=textfield-label]').focus();
    cy.get('label').should('be.visible');
  });
});