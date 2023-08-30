/// <reference types="cypress" />
const data = require("../../fixtures/signup.json");

import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage" ;

const homePage = new HomePage();
const loginPage = new LoginPage();


describe ('Login Test' , function() {

    before('KoraPay Login Test', function (){
        cy.visit(Cypress.env('url')+ "auth/login")
    })

    it ('should validate that user can navigate to login page', () => {

        loginPage.signInBtn.click()
        cy.wait (3000)
       // loginPage.loginWelMsg.should('be.visible')
        loginPage.loginWelcomeMsg.contains('Welcome back, Please log in to your account to access your dashboard').should('be.visible')

    })

    
    it("should verify that user cannot login with valid email and invalid password", function () {
        loginPage.emailField.type('kelechikora1232@yopmail.com')
        loginPage.passwordField.type('Test@123456')
        loginPage.signInBtn.click()
        loginPage.loginInvalidErrorMsg.should('contain.text', 'Invalid Credentials')
        loginPage.emailField.clear()
        loginPage.passwordField.clear()
    })


    it('should validate that user can login with valid email and password', () => {
        cy.wait (3000)
        loginPage.emailField.type('kelechikora1232@yopmail.com')
        loginPage.passwordField.type('Test@12345')
        loginPage.signInBtn.click()
        loginPage.welToDashboardMsg.contains('Welcome to your dashboard').should('be.visible')

    })

    after("Clear the cache and cookies", ()=>{
        cy.clearCookies();
        cy.clearAllSessionStorage()
    })

 
})