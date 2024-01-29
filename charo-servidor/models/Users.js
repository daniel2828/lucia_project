const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
})

const UserModel = model("User", UserSchema)

module.exports = UserModel;