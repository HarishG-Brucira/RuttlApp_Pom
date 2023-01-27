const { startBrowser } = require('./browserConfig');
const { expect } = require('chai');
const { FormSubmissionPage } = require('./pages/formPage');
const { formSelectors } = require('./pages/formSelectors');

const waitTillHTMLRendered = async (page, timeout = 30000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;
  
    while(checkCounts++ <= maxChecks){
      let html = await page.content();
      let currentHTMLSize = html.length; 
  
      let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);
  
      console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);
  
      if(lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize) 
        countStableSizeIterations++;
      else 
        countStableSizeIterations = 0; //reset the counter
  
      if(countStableSizeIterations >= minStableSizeIterations) {
        console.log("Page rendered fully..");
        break;
      }
  
      lastHTMLSize = currentHTMLSize;
      await page.waitForTimeout(checkDurationMsecs);
    }  
  };

let browser, page, formSubmissionPage;
before(async () => {
    browser = await startBrowser();
    page = await browser.newPage();
})
before(async () => {
    formSubmissionPage = new FormSubmissionPage(page);
 //   await page.goto(formSelectors.url);
    //await page.goto(formSelectors.url,{waitUntil: ' domcontentloaded'});

    await page.goto(formSelectors.url, {'timeout': 10000, 'waitUntil':'load'});
    await waitTillHTMLRendered(page)
    const data = await page.content()

    
})


describe("Ruttl automation", async () => {
    it("Test Automation", async () => {
        //Add EmailID
        await formSubmissionPage.typeDirectEmail("cewopax344@chnlog.com");

        //Add Password
        await formSubmissionPage.typeDirectPassword("ruttl@12345");

        //Click on login
        await formSubmissionPage.DirectSignIn();
        await waitTillHTMLRendered(page)
        const data = await page.content()

        //Upgrade Link
        await formSubmissionPage.ClickonUpgrade();
        await waitTillHTMLRendered(page)
        const data1 = await page.content()

        //Page Scroll
        await formSubmissionPage.pageScroll();
        await waitTillHTMLRendered(page);
        const data2 = await page.content();

        //Standard Plan
        /*await formSubmissionPage.StandardPlan();
        await waitTillHTMLRendered(page);
        const data3 = await page.content();

        //Monthly Plan
        await formSubmissionPage.MonthlyBilling();
        await waitTillHTMLRendered(page);
        const data4 = await page.content();

        //Applying Code
        await formSubmissionPage.Codeapply();
        await waitTillHTMLRendered(page);
        const data5 = await page.content();

        //Country Selection
        await formSubmissionPage.Country();
        const data6 = await page.content();

        //Code
        await formSubmissionPage.Applymonthlycode();
        await waitTillHTMLRendered(page);
        const data7 = await page.content();

        //Code Selection
        await formSubmissionPage.Codeselection();
        const data8= await page.content();

        //Page Scroll
        await formSubmissionPage.Paymentpagescroll();
        const data9 = await page.content();

        //Payments_Button
        await formSubmissionPage.Paymentsbutton();
        const data10 =await page.content();

        //Card Number
        await formSubmissionPage.CardNumber("4242424242424242");
        const data11=await page.content();

        //Card Expiry Date
        await formSubmissionPage.CardExpiration("1124");
        const data12 = await page.content();

        //Card CVV
        await formSubmissionPage.CardCVV("123");
        const data13 = await page.content();

        //Card Name
        await formSubmissionPage.CardName("Hari Dubey");
        const data14 = await page.content();

        //Address Lane 1
        await formSubmissionPage.addlane1("Prayagraj");
        const data15 = await page.content();

        //Address Lane 2
        await formSubmissionPage.addlane2("Uttar Pradesh");
        const data16 = await page.content();

        //City
        await formSubmissionPage.addCity("Uttar Pradesh");
        const data17 = await page.content();

        //PinCode
        await formSubmissionPage.State();
        const data18 = await page.content();

        //State
        await formSubmissionPage.PinCode1("211011");
        const data19 = await page.content();*/
      
      
      
      
      




       


        


        

        

        

    })
})

/* after(async () => {
    await browser.close();
}) */