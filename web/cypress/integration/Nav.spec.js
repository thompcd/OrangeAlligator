// //Nav component integration and responsiveness
// const sizes = ['iphone-6', 'ipad-2', 'macbook-15']

// //all screen sizes
// describe('Nav Menu', function () {
//     sizes.forEach((size) => {
//         it(`using a ${size} screen`, () => {
//             cy.visit('/')
//             if (Cypress._.isArray(size)) {
//                 cy.viewport(size[0], size[1])
//             } else {
//                 cy.viewport(size)
//             }
//             if (size == 'iphone-6'){
//                 cy.get('nav ul').find('li').should('not.have.class', 'underline-box');
//             } else{
//                 cy.get('nav ul').find('li').should('have.class', 'underline-box');
//             }
//         });

//         //all links are valid
//         it('has proper titles and links', () => {
//             cy.get('nav img').click();
//             cy.url().should('include', '/index');
//             cy.get('nav a').contains('services').click();
//             cy.url().should('include', '/services');
//             cy.get('nav a').contains('contact').click();
//             cy.url().should('include', '/contact');
//         });
//     });  
// });