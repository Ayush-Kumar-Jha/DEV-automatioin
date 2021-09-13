let fs = require("fs");

function f(path) { 
    return new Promise(function executor(resolve,reject){  
        fs.readFile(path, function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

let p1 = f("f.txt");

p1.then(function(data){  //promise chaining..it will return p2 once p1 'then' is done
    console.log(data+"");//chaining makes this sequential but its still async...i.e., sync function will still run 1st
    let p2 = f("f2.txt");
    return p2;
}).then(function(data){  //it will return p3 once p2 'then' is done
    console.log(data+"");
    let p3 = f("f3.txt");
    return p3;
}).then(function(data){
    console.log(data+"");
}).catch(function(err){  //it will catch any error in the whole then chain ,terminate and give the error
                         //i.e if it catches error in p1 then p2 and p3 'then'will not work..if in p2 then
                         //p3 will not run   
    console.log(err);
})