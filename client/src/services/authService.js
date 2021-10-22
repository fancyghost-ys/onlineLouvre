import API from './api'

const AuthService = {
    login: (data) => {
        return API.post('/Signin', data)
            .then(response => {
                return response.data
            })
            .then(data => {
                setHeadersAndStorage(data)
                return data
            })
            .catch(error => {
                console.log(error.response.data.error)
                throw error.response.data.error
            })
    },
    register: (data) => {
        return API.post('/Signup', data)
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
    logout: () => {
        API.defaults.headers['Authorization'] = ''
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    },


}

const setHeadersAndStorage = ({ user, token }) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}
export default AuthService