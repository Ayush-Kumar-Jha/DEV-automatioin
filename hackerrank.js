let pup = require("puppeteer")    

let gPage;
let gBrowser;
let email = "rebor19390@drlatvia.com";
let pass = "Akj010101@"
let lang;
let code;

pup                               
.launch({headless:false,defaultViewport:null,args:["--start-maximized"],slowMo:25,})         
.then(function(browser){ 
    gBrowser = browser;
    return browser.pages();     
})
.then(function(pagesArray){             

    gPage = pagesArray[0];                 
    return gPage.goto("https://www.hackerrank.com/auth/login");
})
.then(function(){
    return gPage.type("#input-1",email);
})
.then(function(){
    return gPage.type("#input-2",pass);
})
.then(function(){
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"),
      ]);
})
.then(function(){
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"),
      ]);
})
.then(function(){
    return gPage.waitForSelector("[data-attr1='warmup']");
})
.then(function(){
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click("[data-attr1='warmup']"),
      ]);
})
.then(function(){
    return gPage.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
})
.then(function(){
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"),
      ]);
})
.then(function(){
    return gPage.waitForSelector("[id='tab-1-item-4']")
})
.then(function(){
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click("[id='tab-1-item-4']")
    ])
})
.then(function(){
    return handlelockbtn(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled")
})
.catch(function(err){
    console.log(err);
}) 

function handlelockbtn(selector){
    return new Promise(function (resolve,reject){
        gPage.waitForSelector(selector)
        .then(function(){
            return gPage.click(selector)
        })
        .then(function(){
            //Lock button click kar chuke honge
            resolve();
        })
        .catch(function(err){
            resolve();
        })
    })
}