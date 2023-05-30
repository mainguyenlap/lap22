const fs = require ('fs');
fs.copyFile('file.txt','copyFile.txt',(err)=>{
    if(err){
        throw err;
    }
    console.log('File is copied!!');
});