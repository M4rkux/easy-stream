import DarkMode from "../../src/components/DarkMode.vue";

describe("DarkMode.cy.ts", () => {
  it("playground", () => {
    cy.mount(DarkMode);
    cy.get("button")
      .should("contain.text", "Dark")
      .click()
      .should("contain.text", "Light");
  });
});
