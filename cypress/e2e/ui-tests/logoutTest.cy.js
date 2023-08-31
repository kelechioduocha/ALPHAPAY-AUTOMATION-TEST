const data = require("../../fixtures/signup.json");

import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage" ;
import LogoutPage from "../../pageObjects/LogoutPage" ;

const homePage = new HomePage();
const loginPage = new LoginPage();
const logout = new LogoutPage();

describe ('Logout Test' , function() {

    before('KoraPay Logout Test', function (){
        cy.visit(Cypress.env('url')+ "auth/login")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it ('should validate that user can navigate to dashboard and Logout', () => {

        // loginPage.loginBtn.click()
        // cy.wait (3000)
        loginPage.emailField.type('kelechikora1232@yopmail.com')
        loginPage.passwordField.type('Test@12345')
        loginPage.signInBtn.click()
        cy.wait(3000);
        logout.profileAvatar.click()
        logout.logoutIcon.click({force: true})
        loginPage.loginWelcomeMsg.should('contain.text', 'Welcome back, Please log in to your account to access your dashboard')


    })

    after("Clear the cache and cookies", ()=>{
        cy.clearCookies();
        cy.clearAllSessionStorage()
    })



})