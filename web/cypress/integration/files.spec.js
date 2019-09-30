//Verify integrity of files

//Invoice Ninja quotes / invoices footer reference
describe('Files on system', () => {
	it('has a design agreement', () => {
		cy.readFile('static/docs/DesignAgreement.pdf')
	});
});