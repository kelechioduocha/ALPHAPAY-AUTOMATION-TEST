export default class SignupPage{

    //Get the elements
    get headerText(){
        return cy.get(".head_info");
    }

    get fullNameField(){
        return cy.get("input[name='full_name']")
    }

    get userNameField(){
        return cy.get("input[name='username']")
    }

    get phoneNumberField(){
        return cy.get("input[name='phone_number']")
    }

    get emailField(){
        return cy.get("input[name='email']")
    }

    get yourPasswordField(){
        return cy.get("input[name='password']")
    }

    get confirmPasswordField(){
        return cy.get("input[name='confirmPassword']")
    }

    get createAccountBtn(){
        return cy.get(".button.btn_colored")
    }



    // Check that the user is on the signup page
    isSignUpPageHeaderTextVisible(){
        this.headerText.should("be.visible")
    }

    
    // Fill the signup fields, click on elements and verify 
    enterFullName(fullName){
        this.fullNameField.clear().type(fullName);
    }
    enterUserName(userName){
        this.userNameField.clear().type(userName);
    }
    enterPhoneNumber(phoneNumber){
        this.phoneNumberField.clear().type(phoneNumber);
    }
    enterEmail(email){
        this.emailField.clear().type(email);
    }
    enterYourPassword(password1){
        this.yourPasswordField.clear().type(password1);
    }
    enterConfirmPassword(password2){
        this.confirmPasswordField.clear().type(password2);
    }


    clickOnCreateAccountBtn(){
        this.createAccountBtn.click();
    }

    

}