let pup = require("puppeteer")    

let gPage;
let gBrowser;


pup                               
.launch({headless:false,defaultViewport:null,args:["--start-maximized"]})         
.then(function(browser){ 
    gBrowser = browser;
    return browser.newPage();     
})
.then(function(page){             

    gPage = page;                 
    return page.goto("https://www.google.co.in/");
})
.then(function(){
    return gPage.type("input.gLFyf.gsfi","Cars");
})
.then(function(){
    //return gPage.click(".FPdoLc.lJ9FBc [class=gNO89b]")
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click(".FPdoLc.lJ9FBc [class=gNO89b]"),
      ]);
})
.then(function(){
    return Promise.all([
        gPage.waitForNavigation(),
        gPage.click("[data-hveid='CAIQAw']")
    ])
})
.then(function(){                 
    return gPage.screenshot({path:"ssin.png"});
})
.then(function(){
    return gBrowser.close();
})
.catch(function(err){
    console.log(err);
})