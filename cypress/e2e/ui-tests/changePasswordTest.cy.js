const data = require("../../fixtures/signup.json");

//import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage" ;
import LogoutPage from "../../pageObjects/LogoutPage" ;
import ChangePasswordPage from "../../pageObjects/ChangePasswordPage";

//const homePage = new HomePage();
const loginPage = new LoginPage();
const logout = new LogoutPage();
const changePasswordPage = new ChangePasswordPage();
let newPassword = 'Test@1234';
let oldPassword = 'Test@12345';

describe ('Change Password Test' , function() {

    before('KoraPay Change Password Test', function (){
        cy.visit(Cypress.env('url')+ "auth/login")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it ('should validate that user can navigate to dashboard and update password', () => {

       
        // cy.wait (3000)
        loginPage.emailField.type('kelly@yopmail.com')
        loginPage.passwordField.type(oldPassword)
        loginPage.signInBtn.click() 
        cy.wait(3000);
        logout.profileAvatar.click()
        changePasswordPage.securityTab.click({force: true})
        changePasswordPage.oldPasswordField.clear()
        changePasswordPage.oldPasswordField.type(oldPassword)
        changePasswordPage.newPasswordField.clear()
        changePasswordPage.newPasswordField.type(newPassword)
        changePasswordPage.changePasswordBtn.click()
        changePasswordPage.passwordChangedSuccessMesg.should('contain', 'Password updated successfully')

        changePasswordPage.oldPasswordField.clear()
        changePasswordPage.oldPasswordField.type(newPassword)
        changePasswordPage.newPasswordField.clear()
        changePasswordPage.newPasswordField.type(oldPassword)
        changePasswordPage.changePasswordBtn.click()
        changePasswordPage.passwordChangedSuccessMesg.should('contain', 'Password updated successfully')


    })

    after("Clear the cache and cookies", ()=>{
        cy.clearCookies();
        cy.clearAllSessionStorage()
    })



})