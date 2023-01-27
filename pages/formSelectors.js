
const formSelectors = {
 
    url: "https://staging.ruttl.com/",
    //Google Sign In
    googleSignIn: "#google-sign-in",
    userName: "#identifierId",
    userNext: "#identifierNext > div > button",
    password:"#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input",
    passwordConfirm: "#passwordNext > div > button",    

    //DirectLogin
    mail:"#email",
    directpwd:"#password",
    directSignIn: "#main > main > div.login-container > form > button",

    //Payments
    Upgrade:"#header-nav-to-upgrade",
    Std_Plan_Button:"#upgrade-plans-cta-standard",
    Billed_Monthly:"#upgrade-interval-monthly",
    Apply_Code:"#upgrade-confirm-apply-coupon",
    Code_Type:"#upgrade-confirm-apply-coupon-input",
    Apply_button:"#upgrade-confirm-apply-coupon-button",
    Make_Payment:"#upgrade-confirm-make-payment-button",
    Card_Number:"#cardNumber",
    Card_Expiry:"#cardExpiry",
    Card_Cvv:"#cardCvc",
    Name:"#billingName",
    Add1:"#billingAddressLine1",
    Add2:"#billingAddressLine2",
    PinCode:"#billingPostalCode",
    City:"#billingLocality",
    Pro_Plan:"#upgrade-plans-cta-pro",
    

    





}

module.exports = { formSelectors };

