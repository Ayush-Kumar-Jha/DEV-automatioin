let fs = require("fs");
//promise is a object so can be stored in a variable

let p = new Promise(function executor(resolve,reject){
    //code to do task

    fs.readFile("f.txt",function(err,data){

        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
})

p.then(function(data){     //then is for resolve...resolve goes to promise and notifies that given task is complete and 
                           //gives data(or value) now we can do whatever we want with data with the help of then
    console.log("data is received");
    console.log(data + "");
})

p.catch(function(err){     //catch is like then for reject...it notifies our promise that the task is unsuccessful and
                           //again gives us the control
    console.log("Unsuccessful")
})