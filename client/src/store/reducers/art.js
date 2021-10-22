import {
    FETCH_ART_PIECES, FETCH_NEW_ART,
    EDIT_ART, DELETE_ART, GET_ALL_USERS, GET_PIECE_BY_ID
} from '../types/types'

const initialState = {
    artPieces: [],
    artPiece: {},
    newPiece: '',
    editStatus: false,
    deleteStatus: false,
    users: []

}

const artReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_ART_PIECES:
            return {
                ...state,
                artPieces: payload,
            }
        case GET_PIECE_BY_ID:
            return {
                ...state,
                artPiece: payload,
            }
        case FETCH_NEW_ART:
            return {
                ...state,
                newPiece: payload,
            }
        case EDIT_ART:
            return {
                ...state,
                editStatus: true

            }
        case DELETE_ART:
            return {
                ...state,
                deleteStatus: true
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload
            }
        default: {
            return state
        }
    }
}

export default artReducer