const { Schema, model } = require("mongoose");

const PictureSchema = new Schema(
    {
        PictureName: {
            type: String,
            required: true
        },
        PictureImg: {
            type: String,
            required: true
        },
        PictureDescription: {
            type: String,
            required: true
        }
    },
    {

        timestamps: true
    }
)

const PictureModel = model("picture", PictureSchema)

module.exports = PictureModel;