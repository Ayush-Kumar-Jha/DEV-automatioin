let fs = require("fs");

function f(path) { //function f is async and promise based function because a promise and object is being made 
                   //and returned in this function
    return new Promise(function executor(resolve,reject){  //we return promise here which is an object
        fs.readFile(path, function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function laterOp(data){
    //console.log("Data is received");
    console.log(data + "");
}

let p1 = f("f.txt");
let p2 = f("f2.txt");
let p3 = f("f3.txt");

p1.then(laterOp);
p2.then(laterOp);
p3.then(laterOp);
