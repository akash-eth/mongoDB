const Student = require("../mApp/student");
const assert = require("assert");
const mongoose = require('mongoose')

describe("user creation", () => {
    it("new user created in your dB", () => {
        // assert(true);
        const akash = new Student({name: "Akash"});
        akash.save()
            .then(() => {
                assert(!akash.isNew);
            })
            .catch(() => {
                console.log("error");
            })
    })
})

beforeEach((done) => {
    mongoose.connection.collections.students.drop(() => {
        done();
    });
});