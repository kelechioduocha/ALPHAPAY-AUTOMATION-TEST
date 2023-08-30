export default class HomePage{

    //Get the elements
    get signUpBtn(){
        return cy.get('.nav_item');
    }

    get homePageLogo(){
        return cy.get('.nav_logo')
    }


    // Check that the user is on the home page
    isSignUpBtnVisible(){
        this.signUpBtn.should('be.visible');
    }

    isHomePageLogoVisible(){
        this.homePageLogo.should('be.visible');
    }

    
    // Click on the signup btn
    clickOnSignUpBtn(){
        this.signUpBtn.click();
    }
}