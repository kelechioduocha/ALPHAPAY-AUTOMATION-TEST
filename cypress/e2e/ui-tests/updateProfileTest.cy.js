const data = require("../../fixtures/signup.json");

//import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage" ;
import LogoutPage from "../../pageObjects/LogoutPage" ;
import UpdateProfilePage from "../../pageObjects/UpdateProfilePage";

//const homePage = new HomePage();
const loginPage = new LoginPage();
const logout = new LogoutPage();
const updateProfile = new UpdateProfilePage();

describe ('Update Profile Page Test' , function() {

    before('KoraPay Update Profile Test', function (){
        cy.visit(Cypress.env('url')+ "auth/login")
    })

    it ('should validate that user can navigate to dashboard and update profile for fullname and username', () => {

       
        // cy.wait (3000)
        loginPage.emailField.type('kelechikora1233@yopmail.com')
        loginPage.passwordField.type('Test@12345')
        loginPage.signInBtn.click() 
        cy.wait(3000);
        logout.profileAvatar.click()
        UpdateProfilePage.fullNameField.type('Kelly')
        UpdateProfilePage.userName.type('44')
       // UpdateProfilePage.updateDetailsBtn.click()

    
        //UpdateProfilePage.updateDetailsBtn.should('contain.text', '')


    })

    after("Clear the cache and cookies", ()=>{
        cy.clearCookies();
        cy.clearAllSessionStorage()
    })



})