const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(
        "mongodb://127.0.0.1:27017/githome",
        {
            useNewUrlParser: true
        },
        err => {
            if (err) {
                console.log('Ei, um erro ocorreu: ', err);
            }
        }
    );
}

module.exports = connectDB;
