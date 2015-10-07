
var co = require("co");
var wait = require("co-wait");

//lets wrap up our function in the co library
//co will call "next()" until done === true

co(function *nottsJS(){
    yield {name: "object?"};
    yield {name: "object?"};
    yield {name: "object?"};
    yield {name: "object?"};
    yield {name: "object?"};
    console.log("done");
}).catch(function(e){
    console.error(e)
});