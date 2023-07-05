
describe("verify login",function(){
    it("login click",async()=>{

        browser.url("https://en.wikipedia.org/wiki/Main_Page")

        console.log("browser opened")
    
        const ele1 = $('#pt-login-2');
        browser.waitUntil(() => ele1.isDisplayed());
        await ele1.click();
        console.log("login clicked");

        const username = $("#wpName1");
        username.setValue("Jagan9797");
        console.log("username entered")

        const password =$("#wpPassword1");
        password.setValue("Jagan@9797")
        console.log("password eneterd")


        const click_Login= $("#wpLoginAttempt");
       await click_Login.click();
        console.log("logged-in")
        

    })
})
