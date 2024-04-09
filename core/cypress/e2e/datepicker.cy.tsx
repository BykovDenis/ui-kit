describe('The Datepicker component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Test1. Typing text. Testing name and value attributes', () => {
    // mount(<Input type="number" name="input name" value="123" />)
    cy.get('input[id=datepicker2]').blur().invoke('val').should('equal', '25.03.2024');
  });
});
