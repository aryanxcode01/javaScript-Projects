let random = Math.random();
console.log(random);

let a = prompt("enter number 1 : ");
let op = prompt("enter operations[+,-,*,/] : ");
let b = prompt("enter number 2 : ");

let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random > 0.1){
    // correct operations
    console.log(`the result is ${a} ${op} ${b}`)
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`)
}

else{
    // faulty operations
    op=obj[op];

    console.log(`the result is ${a} ${op} ${b}`)
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`)
}