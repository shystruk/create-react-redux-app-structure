const config = require('./../../../../../cypress.json');

describe('create-react-redux-app-structure', function() {
    it('should assert that <title> is correct', function() {
      cy.visit(config.basicConfig.dev.visitURL);
  
      cy.title().should('include', 'Create React + Redux App Structure');
    });
});
