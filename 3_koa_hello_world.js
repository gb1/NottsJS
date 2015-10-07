
var koa = require("koa");
var app = koa();

app.use(function *(){
   this.body = "Hello Duck";
});

app.listen(2015);
console.log("listening on 2015");
