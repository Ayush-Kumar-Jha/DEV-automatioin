//requiring puppeteer package and saving it in a variable called pup
let pup = require("puppeteer")    //all puppeteer functions mrthods give a promise

let gPage;

//using launch function of puppeteer to launch a browser(this function returns a promise)
pup                               
.launch({headless:false})         //if headless is true...we cant see our browser opening..but itll still do the same task
                                  //.launch gives a promise and then .then attaches a function to that promise of opening a browser... 
                                  //when this promise is resolved..itll return browser object as an arg to .then
.then(function(browser){ 
    return browser.newPage();     //using the browser we areopening a new page by this method.
                                  //this again gives us a promise
})
.then(function(page){             //this .then attaches a function to the promise of opening a new page

    gPage = page;                 //we stored page in gPage as scope of page is only inside this then....thats why
                                  //we made our gPage global
    return page.goto("https://www.google.co.in/");
})
.then(function(){                 //this attaches a function to the promise of going to google.com
    return gPage.screenshot({path:"ss.png"});
})
.catch(function(err){
    console.log(err);
})