export class LoginPage{
    constructor(){
        this.usuarioInput = '#user';
        this.passwordInput = '#pass';
        this.loginButton = '#submitForm'
    }

    putUser(user){
        cy.get(this.usuarioInput).type(user);

    }

    putPass(pass){

        cy.get(this.passwordInput).type(pass);
    }

    clickLogin(){
        cy.get(this.loginButton).click();
    }

    logComplete(user, pass){
        this.putUser(user);
        this.putPass(pass)
        this.clickLogin();
    }
}