export default class UpdateProfilePage{

    //Get the elements
    get fullNameField(){
        return cy.get('input[name="full_name"]')
    }

    get userName(){
        return cy.get(':nth-child(2) > input')
    }

    get updateDetailsBtn(){
        return cy.get('form > .button')
    }

    get updateSuccessMesg(){
        return cy.get('div:nth-child(1)', { timeout: 5000 })
    }    

}