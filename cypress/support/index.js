// ***********************************************************
// This example support/index.js is processed and
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

//Import actions
import "./actions/Login.actions";
import "./actions/Logout.actions";
import "./actions/ViewCourses.actions";

//Import components
import "./components/Login.components";
import "./components/Logout.components";

// Alternatively you can use CommonJS syntax:
// require('./commands')

//import postgreSQL from 'cypress-postgresql';
//postgreSQL.loadDBCommands();

//import postgreSQL from 'cypress-postgresql';
//postgreSQL.loadDBCommands();
