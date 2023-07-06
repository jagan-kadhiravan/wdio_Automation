
describe("verify login",()=>
{
    it("login click",async()=>{

        browser.url("https://en.wikipedia.org/wiki/Main_Page")
        browser.maximizeWindow();

        console.log("browser opened")
    
        const ele1 = $('#pt-login-2');
        //to check the element is displayed or not
        browser.waitUntil(() => ele1.isDisplayed());


        //After checked login to be clicked
        await ele1.click();
        console.log("login clicked");


        //To entered the username
        const userName = $("#wpName1");
        await  userName.setValue("Jagan9797");
        console.log("username entered")

        //to getText of username
        const nameValue = userName.getText();
        console.log(nameValue);
   

         //to enter the password 
        const password =$("#wpPassword1");
        await  password.setValue("Jagan@9797")
        console.log("password entered")


        //To getText of password
        const passValue = password.getText();
        console.log(passValue);
 
        
    });

      it('verify login button', async() => 
      {
        
        //To click the login button
        const clickLogin= $("//*[@id='wpLoginAttempt']");
        await clickLogin.click();
        console.log("logged-in");

    })

     it('verify welcome page', async () => 
     {
         //To check the web page present the welcome_to _wikipedia text
         const ele2 =$('//*[contains(text(),"Welcome to")]');

    //    await ele2.click();

         await browser.waitUntil(()=>ele2.isDisplayed());//explicit wait
         console.log("ele2 is displayed")
        });


 
        it('verify the text',async() =>
         {
             //to check the username
          const text=$('#pt-userpage-2');
          await browser.waitUntil(()=>text.isDisplayed());
 
           const value = await text.getText();
        // // browser.waitForExist(value)
          console.log(value);


         //value.should.be.equal(expectedUser

          if(value=="Jagan9797")
          {
            console.log("user is correct")
        }
        else
        {
            console.log("enter the correct user")
        }
     });

});


