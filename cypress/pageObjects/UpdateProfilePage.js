export default class UpdateProfilePage{

    //Get the elements
    get fullNameField(){
        return cy.get('form > :nth-child(1) > input')
    }

    get userName(){
        return cy.get(':nth-child(2) > input')
    }

    get updateDetailsBtn(){
        return cy.get('form > .button')
    }

    get updateSuccessMesg(){
        return cy.get('')
    }    

}