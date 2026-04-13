describe("FileUploader e2e page", () => {
  beforeEach(() => {
    cy.visit("/file-uploader-e2e");
    cy.viewport(1920, 1080);
  });

  it("Test 1. Uploads a single file", () => {
    cy.get("#file-uploader-e2e-input").selectFile(
      {
        contents: Cypress.Buffer.from("hello"),
        fileName: "single.txt",
        mimeType: "text/plain",
      },
      { force: true }
    );

    cy.get("#file-uploader-e2e-state").should("have.text", "single.txt");
  });

  it("Test 2. Uploads multiple files", () => {
    cy.get("#file-uploader-e2e-input").selectFile(
      [
        {
          contents: Cypress.Buffer.from("file-a"),
          fileName: "a.csv",
          mimeType: "text/csv",
        },
        {
          contents: Cypress.Buffer.from("file-b"),
          fileName: "b.csv",
          mimeType: "text/csv",
        },
      ],
      { force: true }
    );

    cy.get("#file-uploader-e2e-state").should("contain.text", "a.csv");
    cy.get("#file-uploader-e2e-state").should("contain.text", "b.csv");
  });

  it("Test 3. Disabled uploader does not render input", () => {
    cy.get("#file-uploader-e2e-disabled").should("not.exist");
    cy.contains("Disabled uploader").should("exist");
  });
});

