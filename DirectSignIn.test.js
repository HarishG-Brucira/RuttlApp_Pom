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
      
        await formSubmissionPage.typeDirectEmail("cewopax344@chnlog.com");
        await formSubmissionPage.typeDirectPassword("rutt@12345");
        await formSubmissionPage.DirectSignIn();

        await waitTillHTMLRendered(page)
        const data = await page.content()

    })
})

/*after(async () => {
    await browser.close();
})*/