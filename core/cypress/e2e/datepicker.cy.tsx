describe('The Datepicker component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/datepicker');
    cy.viewport(1920, 1080);
    // cy.get('button[data-test="btn-delete-value"]').as('btn').click({ multiple: true});
  });
  it('Test1. Selection by click text. Testing input value changing attributes by onChange event handler. Mask dd.MM.yyyy (onChange)', () => {
    // Typing value
    cy.get('#datepicker1').focus().type('01.04.2024').blur().should('value', '01.04.2024');
    // Remove values
    // cy.get('button[data-test="btn-delete-value"]').as('btn').click();
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker1').should('value', '');
  });
  it('Test2. Selection by click text. Testing input value changing attributes by onChange event handler. Mask yyyy-MM-dd (onBlur)', () => {
    // Typing value
    cy.get('#datepicker2').focus().type('2024-04-01').blur().should('value', '2024-04-01');
    // Remove values
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker2').should('value', '');
  });
  it('Test3. Selection by click. Testing value changing attributes by onChange event handler. Mask dd.MM.yyyy  (onChange)', () => {
    cy.get('#datepicker1').focus().type('01.04.2024').blur().should('value', '01.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('button[name="10"]').as('btn').click();
    cy.get('#datepicker1').should('value', '10.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('button[name="23"]').as('btn').click();
    cy.get('#datepicker1').should('value', '23.04.2024');
  });
  it('Test4. Selection by click. Testing value changing attributes by onChange event handler. Mask yyyy-MM-dd (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-02-01').blur().should('value', '2024-02-01');
    cy.get('#datepicker2').focus().click();
    cy.get('button[name="28"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-02-28');
    cy.get('#datepicker2').focus().click();
    cy.get('button[name="13"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-02-13');
  });
  it('Test5. Test min-max date  (onChange)', () => {
    cy.get('#datepicker3').focus().click();
    cy.get('button[data-test-name="setToday"]').should('be.disabled');
  });
  it('Test6. Selection by click text after invalid typing value  (onChange)', () => {
    // Typing value
    cy.get('#datepicker1').focus().type('03.04.2024').blur().should('value', '03.04.2024');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker1').focus().type('55.03.2024').blur().should('value', '55.03.2024');
    cy.get('[data-test-id=datepicker1-text-message]').should('have.text', 'Дата не валидна');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker1').should('value', '');
  });
  it('Test7. Selection by click text after invalid typing value1 and checking invalid typing value (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker2').focus().type('2024-03-54').blur().should('value', '2024-03-54');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker2').should('value', '');
  });
  it('Test8. Input invalid date event handler onChange  (onChange)', () => {
    cy.get('#datepicker1').focus().type('03.04.2024').blur().should('value', '03.04.2024');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker1').focus().type('03.04').blur().should('value', '03.04.');
    cy.get('[data-test-id=datepicker1-text-message]').should('have.text', 'Дата не валидна');
  });
  it('Test9. Input invalid date event handler  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker2').focus().type('2024-03-5').blur().should('value', '2024-03-5');
    cy.get('[data-test-id=datepicker2-text-message]').should('have.text', 'Date is not valid');
  });
  it('Test10. Input invalid date event handler  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker2').focus().type('2024-03').blur().should('value', '2024-03-');
    cy.get('[data-test-id=datepicker2-text-message]').should('have.text', 'Date is not valid');
  });
  it('Test10. Change to previous month  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-previous-month-datepicker2').as('btn').click();
        cy.get('#get-previous-month-datepicker2').as('btn').click();
        cy.get('button[name="5"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2024-02-05');
      });
  });
  it('Test11. Change to next month  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-next-month-datepicker2').as('btn').click();
        cy.get('#get-next-month-datepicker2').as('btn').click();
        cy.get('button[name="20"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2024-06-20');
      });
  });
  it('Test12. Change to previous year (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-previous-year-datepicker2').as('btn').click();
        cy.get('#get-previous-year-datepicker2').as('btn').click();
        cy.get('button[name="5"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2022-04-05');
      });
  });
  it('Test13. Change to next year  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-next-year-datepicker2').as('btn').click();
        cy.get('#get-next-year-datepicker2').as('btn').click();
        cy.get('button[name="20"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2026-04-20');
      });
  });  it('Test1. Selection by click text. Testing input value changing attributes by onChange event handler. Mask dd.MM.yyyy (onChange)', () => {
    // Typing value
    cy.get('#datepicker1').focus().type('01.04.2024').blur().should('value', '01.04.2024');
    // Remove values
    // cy.get('button[data-test="btn-delete-value"]').as('btn').click();
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker1').should('value', '');
  });
  it('Test2. Selection by click text. Testing input value changing attributes by onChange event handler. Mask yyyy-MM-dd (onBlur)', () => {
    // Typing value
    cy.get('#datepicker2').focus().type('2024-04-01').blur().should('value', '2024-04-01');
    // Remove values
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker2').should('value', '');
  });
  it('Test3. Selection by click. Testing value changing attributes by onChange event handler. Mask dd.MM.yyyy  (onChange)', () => {
    cy.get('#datepicker1').focus().type('01.04.2024').blur().should('value', '01.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('button[name="10"]').as('btn').click();
    cy.get('#datepicker1').should('value', '10.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('button[name="23"]').as('btn').click();
    cy.get('#datepicker1').should('value', '23.04.2024');
  });
  it('Test4. Selection by click. Testing value changing attributes by onChange event handler. Mask yyyy-MM-dd (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-02-01').blur().should('value', '2024-02-01');
    cy.get('#datepicker2').focus().click();
    cy.get('button[name="28"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-02-28');
    cy.get('#datepicker2').focus().click();
    cy.get('button[name="13"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-02-13');
  });
  it('Test5. Test min-max date  (onChange)', () => {
    cy.get('#datepicker3').focus().click();
    cy.get('button[data-test-name="setToday"]').should('be.disabled');
  });
  it('Test6. Selection by click text after invalid typing value  (onChange)', () => {
    // Typing value
    cy.get('#datepicker1').focus().type('03.04.2024').blur().should('value', '03.04.2024');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker1').focus().type('55.03.2024').blur().should('value', '55.03.2024');
    cy.get('[data-test-id=datepicker1-text-message]').should('have.text', 'Дата не валидна');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker1').should('value', '');
  });
  it('Test7. Selection by click text after invalid typing value1 and checking invalid typing value (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker2').focus().type('2024-03-54').blur().should('value', '2024-03-54');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click({ multiple: true });
    cy.get('#datepicker2').should('value', '');
  });
  it('Test8. Input invalid date event handler onChange  (onChange)', () => {
    cy.get('#datepicker1').focus().type('03.04.2024').blur().should('value', '03.04.2024');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker1').focus().type('03.04').blur().should('value', '03.04.');
    cy.get('[data-test-id=datepicker1-text-message]').should('have.text', 'Дата не валидна');
  });
  it('Test9. Input invalid date event handler  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker2').focus().type('2024-03-5').blur().should('value', '2024-03-5');
    cy.get('[data-test-id=datepicker2-text-message]').should('have.text', 'Date is not valid');
  });
  it('Test10. Input invalid date event handler  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('button[data-test="btn-delete-value"]').as('btn').parent().click();
    cy.get('#datepicker2').focus().type('2024-03').blur().should('value', '2024-03-');
    cy.get('[data-test-id=datepicker2-text-message]').should('have.text', 'Date is not valid');
  });
  it('Test10. Change to previous month  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-previous-month-datepicker2').as('btn').click();
        cy.get('#get-previous-month-datepicker2').as('btn').click();
        cy.get('button[name="5"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2024-02-05');
      });
  });
  it('Test11. Change to next month  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-next-month-datepicker2').as('btn').click();
        cy.get('#get-next-month-datepicker2').as('btn').click();
        cy.get('button[name="20"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2024-06-20');
      });
  });
  it('Test12. Change to previous year (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-previous-year-datepicker2').as('btn').click();
        cy.get('#get-previous-year-datepicker2').as('btn').click();
        cy.get('button[name="5"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2022-04-05');
      });
  });
  it('Test13. Change to next year  (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-04-03').blur().should('value', '2024-04-03');
    cy.get('#datepicker2')
      .focus()
      .click()
      .then(() => {
        cy.get('#get-next-year-datepicker2').as('btn').click();
        cy.get('#get-next-year-datepicker2').as('btn').click();
        cy.get('button[name="20"]').as('btn').click();
        cy.get('#datepicker2').should('value', '2026-04-20');
      });
  });
  it('Test14. Change month and year from dropdown (onChange)', () => {
    cy.get('#datepicker1').focus().type('03.04.2024').blur().should('value', '03.04.2024');
    cy.get('#datepicker1').focus().click();
    cy.get('#datepicker-month-datepicker1-input').click().focus();
    cy.get('#datepicker-month-datepicker1-list > div:nth-of-type(9) > button').as('btn').click();
    cy.get('#datepicker1').should('value', '03.09.2024');
    cy.get('#datepicker-year-datepicker1-input').click().focus();
    cy.get('button[data-value="2025"]').as('btn').click();
    cy.get('#datepicker1').should('value', '03.09.2025');
  });
  it('Test15. Change month and year from dropdown (onBlur)', () => {
    cy.get('#datepicker2').focus().type('2024-05-19').blur().should('value', '2024-05-19');
    cy.get('#datepicker2').focus().click();
    cy.get('#datepicker-month-datepicker2-input').click().focus();
    cy.get('#datepicker-month-datepicker2-list > div:nth-of-type(9) > button').as('btn').click();
    cy.get('#datepicker2').should('value', '2024-09-19');
    cy.get('#datepicker-year-datepicker2-input').click().focus();
    cy.get('button[data-value="2028"]').as('btn').click();
    cy.get('#datepicker2').should('value', '2028-09-19');
  });
});
