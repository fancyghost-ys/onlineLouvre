const ArtPieces = require('../models/artPieces')
const multer = require('multer')

const FILE_EXETENIONS = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_EXETENIONS[file.mimetype]
        let uploadError = new Error('Invalid Image type')
        if (isValid) uploadError = null
        cb(uploadError, 'public/upload')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname.split(' ').join('-')
        const extension = FILE_EXETENIONS[file.mimetype]
        cb(null, `${Date.now()}-${filename}`)
    }
})

uploadsOptions = multer({ storage: storage })

exports.uploadsOptions = uploadsOptions


exports.allArtPieces = async (req, res, next) => {
    let pagesize = 5
    let n = req.query.page ? req.query.page : 1
    // const PieceNo = await ArtPieces.;
    await ArtPieces.find().skip(pagesize * (n - 1)).limit(pagesize).then((artPieces) => {
        if (!artPieces) {
            return res.status(404).json({ error: 'Not found 404' })
        }
        return res.status(200).json(artPieces)

    })
        .catch(error => {
            console.log(error)
            return res.status(404).json(error.message)
        })
}

exports.artPieceById = async (req, res, next) => {
    await ArtPieces.findById(req.params.id).then((artPiece) => {
        if (!artPiece) {
            return res.status(404).json({ error: 'Not found 404' })
        }
        return res.status(200).json(artPiece)

    })
        .catch(error => {
            console.log(error)
            return res.status(404).json(error.message)
        })
}
exports.addNewArtPiece = async (req, res, next) => {
    const file = req.file
    if (!file) return res.status(404).send('No Image in the request')
    const fileName = file.filename
    const basePath = `${req.protocol}://${req.get('host')}/public/upload`
    const artPiece = new ArtPieces({
        picture: `${basePath}/${fileName}`,
        artist: req.body.artist,
        description: req.body.description,
    })
    await artPiece.save()
        .then(artPiece => {
            if (!artPiece) {
                return res.status(400).json({ error: 'artPiece not created' })
            }
            return res.status(200).json(artPiece)
        })
        .catch(error => {
            console.log(error)
            return res.status(401).json(error.message)
        })
}


exports.updateArtPiece = async (req, res, next) => {
    const artPiece = await ArtPieces.findById(req.params.id)
    if (!artPiece) return res.status(400).json({ error: 'artPiece not found' })

    const file = req.file
    let picturePath;

    if (file) {
        const fileName = file.filename
        const basePath = `${req.protocol}://${req.get('host')}/public/upload`
        picturePath = `${basePath}/${fileName}`

    }
    else {
        picturePath = artPiece.picture
    }
    await ArtPieces.findByIdAndUpdate(
        req.params.id,
        {
            picture: picturePath,
            artist: req.body.artist,
            description: req.body.description,
        }, { new: true })
        .then(artPiece => {
            if (!artPiece) {
                return res.status(400).json({ error: 'artPiece not updated' })
            }
            return res.status(200).json(artPiece)
        })
        .catch(error => {
            console.log(error)
            return res.status(401).json(error.message)
        })
}


exports.removeArtPiece = async (req, res) => {
    ArtPieces.findByIdAndRemove(req.params.id)
        .then(artPiece => {
            if (artPiece) {
                return res.status(201).json({ messaage: 'The Art Piece has been removed' })
            }

            else {
                return res.status(400).json({ messaage: 'failed to remove the Art Piece' })
            }
        })
        .catch(error => {
            return res.status(500).json({ error: error.message })
        })
}