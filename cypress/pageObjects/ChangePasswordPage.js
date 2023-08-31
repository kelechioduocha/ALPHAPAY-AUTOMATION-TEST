export default class ChangePasswordPage{

    //Get the elements
    get securityTab(){
        return cy.get('[href="/dashboard/settings/security"]')
        //return cy.get('div > a.active]').contains('Security')
    }

    get oldPasswordField(){
        return cy.get('input[name="password"]') 
    }
    get newPasswordField(){
        return cy.get('input[name="new_password"]') 
    }

    get changePasswordBtn(){
        return cy.get('button').contains('Change Password')
    }

    get passwordChangedSuccessMesg(){
        return cy.get('div:nth-child(1)', { timeout: 5000 })
        //cy.get('div:nth-child(1)', { timeout: 5000 })
    }    

}