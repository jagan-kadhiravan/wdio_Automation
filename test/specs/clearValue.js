describe("verify the textbox is clear value",()=>
{
    it("login click",async()=>{

        browser.url("https://en.wikipedia.org/wiki/Main_Page")
        browser.maximizeWindow();
         console.log("browser opened")
    

        const ele1 = $('#pt-login-2');
        browser.waitUntil(() => ele1.isDisplayed());
        await ele1.click();
        console.log("login clicked");


        //To entered the username
        const userName = $("#wpName1");
        await  userName.setValue("Jagan9797");
        console.log("username entered")
   

         //to enter the password 
        const password =$("#wpPassword1");
        await  password.setValue("Jagan@9797")
        console.log("password entered")

  
        //to clear of username
        await userName.clearValue();

        //const clearName = await userName.getValue();
        //console.log(clearName);

       //To clear the password
       await password.clearValue();

       //const passValue = await password.getValue();
       //console.log(passValue);

      if(userName==='' && password==='')
      {
        console.log(" cleared")
      }
      else
      {
        console.log("Not cleared")
      }

    });
  })