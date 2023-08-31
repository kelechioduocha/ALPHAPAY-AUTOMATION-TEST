const data = require("../../fixtures/signup.json");
const { faker } = require('@faker-js/faker');

import HomePage from "../../pageObjects/HomePage";
import SignupPage from "../../pageObjects/SignupPage";
import DashboardPage from "../../pageObjects/DashboardPage"

const homePage = new HomePage();
const signupPage = new SignupPage();
const dashboardPage = new DashboardPage();
const fullName = faker.name.fullName();
const userName = faker.name.firstName() + "123";
const phoneNumber = "080" + Math.floor(Math.random() * 100000000);
const email = "kelechikora" + faker.number.int() + "@yopmail.com";
const yourPassword = data.yourPassword
const confirmPassword = data.confirmPassword

describe('KoraPay Signup Test', function (){

    before('Open website', function (){
        cy.visit(Cypress.env('url'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });

    it("should verify that the user is on the home page successfully.", function () {
        cy.url().should("include", "alphapay");
        homePage.isHomePageLogoVisible();
        homePage.isSignUpBtnVisible();          
    })

    it("should verify that the user can sign up successfully", ()=>{
        homePage.clickOnSignUpBtn();
        signupPage.isSignUpPageHeaderTextVisible();
        signupPage.enterFullName(fullName);
        signupPage.enterUserName(userName)
        signupPage.enterPhoneNumber(phoneNumber)
        signupPage.enterEmail(email)
        signupPage.enterYourPassword(yourPassword)
        signupPage.enterConfirmPassword(confirmPassword)
        signupPage.clickOnCreateAccountBtn();
        dashboardPage.isSuccessMessageDisplayed();
        
        cy.wait(3000); 
        dashboardPage.isDashboardNavListDisplayed();
    })


    after("Clear the cache and cookies", ()=>{
        cy.clearCookies();
        cy.clearAllSessionStorage()
    })

})
