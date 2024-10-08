// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-plugin-api'// feedback visual ao rodar um teste de api!


import './api_commands'
import './cli_commands'
import './gui_commands'
import 'cypress-mochawesome-reporter/register';

// importa a lib para


// Alternatively you can use CommonJS syntax:
// require('./commands')