const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/mongoTube", {useNewUrlParser: true,  useUnifiedTopology: true });


mongoose.connection
    .once("open", () => {console.log("Connected Successfully");})
    .on("error", (error) => {
        console.log("Housten you have a problem", error);
    })

