const express = require('express');
const router = express.Router();
const {
    allArtPieces,
    artPieceById,
    addNewArtPiece,
    uploadsOptions,
    updateArtPiece,
    removeArtPiece
} = require('../controllers/artController')
const { requireSignin, isAuth, isMMstaff } = require('../helpers/rbac')

router.get('/', [requireSignin, isAuth], allArtPieces)
router.get('/:id', [requireSignin, isAuth], artPieceById)
router.post('/AddNewArtPiece', [requireSignin, isAuth, isMMstaff], uploadsOptions.single('picture'), addNewArtPiece)
router.put('/UpdateArtPiece/:id', [requireSignin, isAuth, isMMstaff], uploadsOptions.single('picture'), updateArtPiece)
router.delete('/RemoveArtPiece/:id', [requireSignin, isAuth, isMMstaff], removeArtPiece)


module.exports = router



