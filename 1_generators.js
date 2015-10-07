
function *nottsJS(){
    yield "NottsJS";
    yield 1;
    yield {name: "object?"};
    yield NaN;
    console.log("done");
}

var njs = nottsJS();

console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next());
console.log(njs.next()); //done === true
