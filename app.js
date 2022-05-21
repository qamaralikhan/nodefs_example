let fs = require('fs');

let createfile =()=>{
    fs.writeFile("myfile.txt",{"my data"},(err)=>{
        if(err) {console.log("Some Error");}
        else {console.log("File crated and data inserted");}
    })
}
createfile();
console.log("Hello")