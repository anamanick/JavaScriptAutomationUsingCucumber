class LoginPage {
    
    get username() { return $("//input[@name='userName']") }
    
    get password() { return $("//input[@name='password']") }
    
    get loginBtn() { return $("//input[@name='login']") }


    login(){

        this.username.setValue("mercury");
        this.password.setValue("mercury");
        this.loginBtn.click();

    }
}

export default new LoginPage();