const fs = require("fs");

function getAllEmployees() {
    return readFilePromise("test.json")
    // fs.readFile("test.json", callback);

    
    // fs.readFile("test.json", (err,data)=>{
    //     callback(err,data);

    //     if(err) {
    //         callback(err,null);
    //     } else {
    //         callback(null,data)
    //     }
    // });
}

function readFilePromise(filename){
    return new Promise((resolve, reject)=>{
        fs.readFile(filename, (err,data)=>{
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

module.exports = {
    getAllEmployees: getAllEmployees
}