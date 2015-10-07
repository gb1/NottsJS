var koa = require("koa");
var route = require("koa-route");
var monk = require("monk");
var wrap = require("co-monk");
var parse = require("co-body");

var app = koa();
var db = monk("localhost/nottsjs");
var places = wrap(db.get("places_in_notts"));

app.use(route.get("/places", listPlaces));
app.use(route.post("/place", savePlace));
app.use(route.get("/place/:id", getPlace));

function *listPlaces(){

    var options = { "limit": 20, "sort": [["created_at", "desc"]]};

    var placesList = yield places.find({}, options);
    this.body = {"places": placesList};
}

function *savePlace(){

    var placeFromRequest = yield parse(this);
    placeFromRequest.created_at = new Date();
    var place = yield places.insert(placeFromRequest);

    this.body = place;
    this.set("Location", "/place/" + place._id);
    this.status = 201; //CREATED OK
}

function *getPlace(id){
    var place = yield places.findById(id);
    this.body = place;
    this.status = 200; //OK
}

app.listen(2016);
console.log("API listening on 2016")
