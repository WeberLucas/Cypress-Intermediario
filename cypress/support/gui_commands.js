Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
  })

  Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()    
    cy.contains('Sign out').click()
  })

  // Cypress.Commands.add('projeto', () => {
  //   cy.contains('Create a project').click()
  //   cy.get('#project_name').type('project test')
  //   cy.get('#project_description').type('Escrevendo descrição')
  //   cy.get('#project_visibility_level_20').click()
  //   cy.get('#project_initialize_with_readme').click()
  //   cy.contains('Create project').click()
  // })

  Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()

  })

  