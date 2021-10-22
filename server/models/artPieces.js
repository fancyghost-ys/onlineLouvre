const mongoose = require('mongoose')


const artPiecesSchema = new mongoose.Schema({
    picture:{
        type:String,
        required: true,
    },
    artist:{
        type:String,
    },
    description:{
        type:String,
    }
}, { timestamps: true }
)


module.exports = mongoose.model('ArtPieces', artPiecesSchema)