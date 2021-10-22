import API from './api'

const ArtService = {
    fetchArtPieces: () => {
        return API.get('/arts')
            .then(response => {
                return response.data
            })
            .then(data => {
                return data
            })
            .catch(error => {
                throw error.response.data.error
            })
    },
    getArtPieceById: (id) => {
        return API.get(`/arts/${id}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                return data
            })
            .catch(error => {
                throw error.response.data.error
            })
    },

    addNewArtPiece: (data) => {
        return API.post('/arts/AddNewArtPiece', data)
            .then(response => {
                return response.data
            })
            .then(data => {
                return data
            })
            .catch(error => {
                throw error.response.data.error
            })
    },
    editExistArt: (id, data) => {
        return API.put(`/arts/UpdateArtPiece/${id}`, data)
            .then(response => {
                return response.data
            })
            .then(data => {
                return data
            })
            .catch(error => {
                throw error.response.data.error
            })
    },
    deleteArtPiece: (id) => {
        return API.delete(`/arts/RemoveArtPiece/${id}`)
            .then(response => {
                return response.data
            })
            .then(data => {
                return data
            })
            .catch(error => {
                throw error.response.data.error
            })
    },
    getAllUsers: () => {
        return API.get('/users/All')
            .then(response => {
                return response.data
            })
            .then(data => {
                return data
            })
            .catch(error => {
                console.log(error.response.data)
                throw error.response.data.error
            })
    },
}

export default ArtService