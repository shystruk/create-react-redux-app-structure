const config = require('./../../../../config.json');

describe('create-react-redux-app-structure', function() {
    it('should assert that <title> is correct', function() {
      cy.visit(config.dev.serverHost);
  
      cy.title().should('include', 'Create React + Redux App Structure');
    });
});
