const fs = require('fs')

fs.watch("source.txt",(eventType,filename)=>{
    if(filename){
        console.log('The file ${filename} has changed, event type : ${eventType}')
        backupFile(filename);
    }
})

function backupFile(filename){
    fs.copyFile("source.txt","backup.txt",(err) => {
        if(err) console.error(err);
        else console.log('File backed up successfully')
    })
}