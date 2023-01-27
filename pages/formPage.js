const { formSelectors } = require('./formSelectors');
class FormSubmissionPage {
    
    constructor(page) {
        this.page = page;
    }
    async selectGoogleSignIn(googleSignIn) {
        await this.page.click(formSelectors.googleSignIn);
       // await this.page.waitForSelector(formSelectors.googleSignIn);
    }
    async typeEmail(userName) {
        await this.page.waitForSelector(formSelectors.userName);
        await this.page.type(formSelectors.userName, userName);
    }
    async emailNext(userNext) {
        await this.page.click(formSelectors.userNext);
    }
   
    async typePassword(password) {
        await this.page.waitForSelector(formSelectors.password);
        await this.page.type(formSelectors.password, password);
    }
    async passwordNext(passwordConfirm) {
        await this.page.click(formSelectors.passwordConfirm);
    }

    async typeDirectEmail(mail) {
        await this.page.waitForSelector(formSelectors.mail);
        await this.page.type(formSelectors.mail, mail);
    }
    
    async typeDirectPassword(directpwd) {
        await this.page.waitForSelector(formSelectors.directpwd);
        await this.page.type(formSelectors.directpwd, directpwd);
    }

    async DirectSignIn(directSignIn) {
        await this.page.click(formSelectors.directSignIn);
    }

    async ClickonUpgrade(Upgrade){
        await this.page.click(formSelectors.Upgrade);
        
    }
    
    async pageScroll(){
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
        

    }

    async StandardPlan(Std_Plan_Button){
        await this.page.click(formSelectors.Std_Plan_Button, Std_Plan_Button);
    
    }

    async MonthlyBilling(Billed_Monthly) {
        await this.page.waitForSelector(formSelectors.Billed_Monthly);
        await this.page.click(formSelectors.Billed_Monthly, Billed_Monthly);
        
    }

    async Codeapply(Apply_Code){
        await this.page.waitForSelector(formSelectors.Apply_Code);
        await this.page.click(formSelectors.Apply_Code, Apply_Code);
    }
    
    async Country(){
        const occupation = await this.page.$("#upgrade-country");
        await occupation.select("IN")
    }
    
    async Applymonthlycode(){
        await this.page.waitForSelector("#upgrade-confirm-apply-coupon-input","RUTTL15");
        await this.page.type("#upgrade-confirm-apply-coupon-input","RUTTL15");

    }

    async Codeselection(){
        await this.page.click("#upgrade-confirm-apply-coupon-button");

    }

    async Paymentpagescroll(){
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("ArrowDown");
    }

    async Paymentsbutton( Make_Payment){
        await this.page.waitForSelector(formSelectors.Make_Payment);
        await this.page.click(formSelectors.Make_Payment, Make_Payment);

    }

    async CardNumber(Card_Number){
        await this.page.waitForSelector(formSelectors.Card_Number);
        await this.page.type(formSelectors.Card_Number, Card_Number);

    }

    async CardExpiration(Card_Expiry){
        await this.page.waitForSelector(formSelectors.Card_Expiry);
        await this.page.type(formSelectors.Card_Expiry, Card_Expiry);


    }

    async CardCVV(Card_Cvv){
        await this.page.waitForSelector(formSelectors.Card_Cvv);
        await this.page.type(formSelectors.Card_Cvv, Card_Cvv);
    }

    async CardName(Name){
        await this.page.waitForSelector(formSelectors.Name);
        await this.page.type(formSelectors.Name, Name);
    }

    async addlane1(Add1){
        await this.page.waitForSelector(formSelectors.Add1);
        await this.page.type(formSelectors.Add1, Add1);
    }

    async addlane2(Add2){
        await this.page.waitForSelector(formSelectors.Add2);
        await this.page.type(formSelectors.Add2, Add2);
    }

    async addCity(City){
        await this.page.waitForSelector(formSelectors.City);
        await this.page.type(formSelectors.City,City);
    }

    async State(){
        const occupation = await this.page.$("#billingAdministrativeArea");
        await occupation.select("Maharashtra")
    }

    async PinCode1(PinCode){
        await this.page.waitForSelector(formSelectors.PinCode);
        await this.page.type(formSelectors.PinCode,PinCode);
        
    }


    
   
       
       
      
    
 

    }
    

module.exports = { FormSubmissionPage };