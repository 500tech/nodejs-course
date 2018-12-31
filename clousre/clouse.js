let a = 1;

const obj = {}
obj.a =3
obj.a =2

// obj = {};

function f1() {
    var b = 10;
    a++
}

f1();
f1();
console.log(a);

for (var/*let*/ index = 0; index < 5; index++) {
    console.log(index);

}

console.log('Out of for: ' + index);

var b = undefined;
console.log('Out of for: ' + b);


function f2() {
    // for (var i = 0; i < 1; i++) {
        var c = 3;
    // }
}
f2();
console.log("c: " + c);

