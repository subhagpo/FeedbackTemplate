describe('Define your Suite', function() {  
 
    it('Define your Spec', function() {
        var loginButton = browser.element(by.id("login"));
        loginButton.click();
        
        //expect the greetings to contain specific text:
        var greetings = browser.element(by.id("displayName"));
        expect(greetings.getText()).toContain("Subhag");
    })
});