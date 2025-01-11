const fs = require('fs')
const path = require('path')

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

fs.watch("./files/source.txt",debounce((eventType,filename)=>{
    if(filename){
        console.log(`The file ${filename} has changed, event type : ${eventType}`)
        backupFile(filename);
    }
    else console.log(`The file ${filename} doesn't exist`)
},100));

function backupFile(filename){
    const sourceFile = path.resolve('./files',filename)
    const backupFile = path.resolve(`./files/backup`)

    fs.copyFile(sourceFile,backupFile,(err) => {
        if(err) console.error(err);
        else console.log('File backed up successfully')
    })
}
