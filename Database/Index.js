const mongoose = require('mongoose');


connect_db = (url) => {
    mongoose.connect(url).then(() => {
        console.log("connected successfully");
    });
}
module.exports = connect_db;
