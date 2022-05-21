let fs = require('fs');

let createfile =(fileName)=>{
    if(fs.existsSync(fileName))
    {
        console.log("File Exist");
      }
    else
    {
            fs.writeFile(fileName,"You are awesome",(err)=>{
                if(err) {console.log("Some Error");}
                else {console.log("File crated and data inserted");}
            })
    }
}
createfile("sampleFile1.txt");
console.log("Hello")