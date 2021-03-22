const mongoose = require('mongoose');
mongoose.Promise = global.Promise;  // ES6 Promise


before((done) => {      // passing done !! And calling it once connection is open !!
    mongoose.connect("mongodb://localhost/mongoTube", {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection
        .once("open", () => {
            // console.log("Connected");
            done();
        })
        .on("error", (error) => {
            console.log(error);
        });
});