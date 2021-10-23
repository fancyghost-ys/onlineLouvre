const mongoose = require('mongoose')


const artPiecesSchema = new mongoose.Schema({
    picture:{
        type:String,
        required: true,
    },
    artist:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}, { timestamps: true }
)


module.exports = mongoose.model('ArtPieces', artPiecesSchema)
