export default class LogoutPage{

    //Get the elements
    get profileAvatar(){
        return cy.get('.dashboard_nav_profile');
    }

    get logoutIcon(){
        return cy.get('div > a:nth-child(3)').contains('Log Out')
    }

    

}