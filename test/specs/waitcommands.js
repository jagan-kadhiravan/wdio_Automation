//Implicit browser.setTimeout({ implicit: 5000 })
//explicit await browser.waitUntil(() => element.isDisplayed(), { timeout: 5000, timeoutMsg: 'Element not displayed' })
//custom wait await browser.pause(3000)
//browser.waitUntil() or browser.waitFor()
//waitForDisplay();
//waitForExist();
//waitForClickable();

describe('wikipedia login', () => 
{
    it('verify the url', async() => 
    {
        browser.url('https://en.wikipedia.org/wiki/Main_Page')

       //to check the text is prsent or not
       const ele= await $("span.mw-headline > a");
      //expect(ele).toHaveText('Welcome to Wikipedia')
      await ele.isEqual('Welcome to Wikipedia');
      console.log('finised')
    });
    
});