const fs = require("fs");

fs.writeFileSync('test.txt', "Hello from node");

fs.writeFile('test2.txt', 'not sync', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        ///
        console.log(1);

    }
})

fs.writeFileSync('test.json',JSON.stringify({test:true}))
const fileContent = fs.readFileSync('test.json',{encoding:'utf8'});
console.log(JSON.parse(fileContent).test);


const a = 3;

if (a == 3) {

}

console.log("a is " + a);