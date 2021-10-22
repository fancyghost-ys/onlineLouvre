import AuthService from '../../services/authService'
import { LOGIN, REGISTER, LOGOUT } from '../../store/types/types'

export const login = (params, history) => dispatch => {
  return AuthService.login(params)
    .then(data => {
      dispatch({ type: LOGIN, payload: data })
      if (data.user.role === 1) {
        history.push('/admin/dashboard')
      }
      else if (data.user.role === 2) {
        history.push('/guest/home')
      }

    })
    .catch(error => {
      throw error
    })
}

export const register = (params, history) => dispatch => {
  return AuthService.register(params)
    .then(data => {
      if (data) {
        dispatch({ type: REGISTER, payload: data })
        history.push('/login')
      }
      else {
        return new Error("This User is already registered")
      }
    })
    .catch(error => {
      throw error
    })
}

export const logout = () => dispatch => {
  AuthService.logout()
  dispatch({ type: LOGOUT })
}

