describe("Pettagram | Tests", () => {

  it("Mi primer test", () => {
    expect(true).to.equal(true)
  })

  it("Raíz de la app", () => {
    cy.visit('/')
  })

  it("Navegación por categorías y ver fotos", () => {
    cy.visit('/pet/1')
    cy.get('article') // it works ass selector from css, it expects if the fotos have an article element
  })

  it("Navegación Navbar footer | Home", () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it("Usuario no registrado -> /favs | Debe ver formulario de registro y login con solo dos inputs", () => {
    cy.visit('/favs')
    cy.get('form').should("have.length", 2)
  })

})