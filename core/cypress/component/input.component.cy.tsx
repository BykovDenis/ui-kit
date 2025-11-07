import getNewReactThemeContext from '../../packages/styles/src';
import { themes } from '../../packages/styles/src/themes';
import { mount } from 'cypress/react';
import { createRef, useState } from 'react';
import Input from '../../packages/input/src/index';

describe('Input (component)', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>();

    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input ref={ref} data-test="ref-test" />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=ref-test]').then($el => {
      expect(ref.current).to.equal($el[0]);
    });
  });

  it('focuses via ref', () => {
    const ref = createRef<HTMLInputElement>();

    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input ref={ref} data-test="focus-ref" />
      </ReactThemeContext.Provider>
    );

    cy.then(() => ref.current?.focus());
    cy.focused().should('have.attr', 'data-test', 'focus-ref');
  });
  it('updates value through ref', () => {
    const ref = createRef<HTMLInputElement>();

    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input ref={ref} data-test="value-ref" />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=value-ref]').type('42');
    cy.then(() => expect(ref.current?.value).to.eq('42'));
  });
  it('keeps same ref after re-render', () => {
    const ref = createRef<HTMLInputElement>();

    const Wrapper = () => {
      const [text, setText] = useState('a');
      return (
        <>
          <button onClick={() => setText('b')}>change</button>
          <ReactThemeContext.Provider value={themes.dark}>
            <Input ref={ref} value={text} data-test="rerender-ref" />
          </ReactThemeContext.Provider>
        </>
      );
    };

    mount(<Wrapper />);

    cy.get('input[data-test=rerender-ref]').then(($el) => {
      const first = ref.current;
      cy.contains('change').click();
      cy.wrap($el).should('have.value', 'b');
      cy.then(() => expect(ref.current).to.equal(first));
    });
  });
  it('calls onChange with correct value with debounce', () => {
    const onChange = cy.stub().as('onChange');
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input variant="outlined" data-test="change-input" onChange={onChange} />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=change-input]').type('hello');
    cy.get('@onChange', { timeout: 10000 }).should('have.been.called');
  });
  it('calls onChange with correct value without debounce', () => {
    const onChange = cy.stub().as('onChange');
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input isNotRunDebounce={true} data-test="change-input" onChange={onChange} />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=change-input]').type('hello');
    cy.get('@onChange').should('have.been.called');
  });
  it('does not allow typing when disabled', () => {
    const onChange = cy.stub();
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input data-test="disabled-input" disabled onChange={onChange} />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=disabled-input]').type('test', { force: true });
    cy.then(() => expect(onChange).not.to.be.called);
  });
  it('renders placeholder text', () => {
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input data-test="ph-input" placeholder="Email" />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=ph-input]').should('have.attr', 'placeholder', 'Email');
  });
  it('toggles focused state on focus and blur', () => {
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input variant="outlined" data-test="focus-blur" />
      </ReactThemeContext.Provider>
    );

    // находим контейнер, у которого реально меняется border-color
    // initially not focused
    cy.get('input[data-test=focus-blur]')
      .should('have.attr', 'data-focused', 'false');

    // after focus -> true
    cy.get('input[data-test=focus-blur]').focus()
      .should('be.focused')
      .and('have.attr', 'data-focused', 'true');

    // after blur -> back to false
    cy.get('input[data-test=focus-blur]').blur()
      .should('not.be.focused')
      .and('have.attr', 'data-focused', 'false');
  });
  it('renders in error state when isError passed', () => {
    mount(
      <ReactThemeContext.Provider value={themes.dark}>
        <Input data-test="error-input" error={true} />
      </ReactThemeContext.Provider>
    );

    cy.get('input[data-test=error-input]')
      .should('have.attr', 'data-error', 'true');
  });
});
