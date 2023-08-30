export default class DashboardPage{
    
    
    get successfulSignupMessage(){
        return cy.get("div[role='status']");
    }

    get navList(){
        return cy.get(".nav-list");
    }

    isSuccessMessageDisplayed(){
        this.successfulSignupMessage.should("be.visible");
        this.successfulSignupMessage.should("contain.text", "Welcome to your dashboard", "Signup Successful")
    }

    isDashboardNavListDisplayed(){
        this.navList.should("be.visible");
    }
}