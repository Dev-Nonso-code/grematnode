const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const adminschema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profile: { type: String }
})
let saltRound = 10

adminschema.pre("save", function (next) {
    console.log(this.password);
    bcrypt.hash(this.password, saltRound).then((hashpassword) => {
        this.password = hashpassword
        next()
    }).catch((err) => {
        console.log(err);
    })

})
const studentmodel = mongoose.model("admin_collection", adminschema)

module.exports = adminmodel