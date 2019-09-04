var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yum", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
