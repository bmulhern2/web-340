var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://bmulhern2:Bmole22%21%21@cluster0-eopst.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDb instance");
});