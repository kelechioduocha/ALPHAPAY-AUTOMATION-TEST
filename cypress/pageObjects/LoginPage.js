export default class HomePage{

    //Get the elements
    get signInBtn(){
        return cy.get('.button').contains('Sign In')
    }

    get emailField(){
        return cy.get(':nth-child(1) > input')
    }

    get passwordField(){
        return cy.get('.password')
    }

    get loginWelcomeMsg(){
        return cy.get('.head_info')
    }

    get LogInBtn(){
        return cy.get('.button').contains('LOG IN')
    }

    get welToDashboardMsg(){
        return cy.get('[style="display: flex; z-index: 9999; position: fixed; transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s; transform: translateY(0px); top: 0px; right: 0px;"] > .go2294718771 > .go1415219401')
    }   
    
    get loginInvalidErrorMsg(){
        return cy.get('.go1415219401')
    } 

}