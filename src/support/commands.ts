// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// Cypress.Commands.add("getUserCardAndVerify", (columInd, cardInd, expData) => {
//     cy.get(`${getColumn(columInd)} ${users.info}`).eq(cardInd).within(() => {
//         cy.get(users.avatar).should("be.visible");
//         cy.get(users.city).should("be.visible").should(($city) => {
//             expect($city).to.contain(expData.city);
//         });
//         cy.get(users.name).should("be.visible").should(($name) => {
//             expect($name).to.contain(expData.name);
//         });
//     });
// });
