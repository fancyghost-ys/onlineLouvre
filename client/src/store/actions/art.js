import ArtService from '../../services/artService'
import {
    FETCH_ART_PIECES,
    FETCH_NEW_ART,
    EDIT_ART,
    DELETE_ART, GET_ALL_USERS, GET_PIECE_BY_ID
} from '../types/types'

export const fetchArtPieces = () => dispatch => {
    return ArtService.fetchArtPieces()
        .then(data => {
            dispatch({ type: FETCH_ART_PIECES, payload: data })
            return data
        })
        .catch(err => { throw err; })
}
export const getArtPiece = (id) => dispatch => {
    return ArtService.getArtPieceById(id)
        .then(data => {
            dispatch({ type: GET_PIECE_BY_ID, payload: data })
            return data
        })
        .catch(err => { throw err; })
}
export const addNewArtPiece = (data) => dispatch => {
    return ArtService.addNewArtPiece(data)
        .then(data => {
            dispatch({ type: FETCH_NEW_ART, payload: data })
            return data
        })
        .catch(err => { throw err; })
}

export const editArtPiece = (id, data) => dispatch => {
    return ArtService.editExistArt(id, data)
        .then(data => {
            dispatch({ type: EDIT_ART, payload: data })
            return data
        })
        .catch(err => { throw err; })
}

export const DeleteArtPiece = (id) => dispatch => {
    return ArtService.deleteArtPiece(id)
        .then(data => {
            dispatch({ type: DELETE_ART, payload: data })
            return data
        })
        .catch(err => { throw err; })
}
export const getAllUsers = () => dispatch => {
    return ArtService.getAllUsers()
        .then(data => {
            dispatch({ type: GET_ALL_USERS, payload: data })
            return data
        })
        .catch(err => { throw err; })
}