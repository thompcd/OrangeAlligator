describe('OrangeAlligator.io home page', () => {
	beforeEach(() => {
		cy.visit('/')
	});
	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('services').click();
		cy.url().should('include', '/services');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('contact').click();
		cy.url().should('include', '/contact');
	});
});