import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { login } from '../../../store/actions/auth'
import Registartion from '../../AssetsPieces/Layouts/Registartion'


const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [userName, setuserName] = useState('Admin2')
    const [password, setPassword] = useState('AAss123456789!!!')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(login({ userName, password }, history))
            .then((res) => setSuccess("Signin Successfull ......."))
            .catch((error) => { setError(error) })
    }

    const showError = () => (
        <div className="alert alert-danger fs-6 h-1" height="4" style={{ display: error ? '' : 'none' }}>
            <p>x {error}</p>
        </div>
    );


    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h2>Hi, Dear Welcome Back!!</h2>

        </div>
    )

    const LoginForm = () => {
        return (
            <div className="p-2">
                <div className="p-2">
                    <div className='card-shadow'>
                        <div id='form-section'>
                            <h2 className='h3 mb-2 fw-normal'>Please Login</h2>
                            {showError()}
                            {showSuccess()}
                            <form onSubmit={submitForm}>
                                <div className="form-group mt-4">
                                    <label className="text-muted">
                                        UserName
                                </label>
                                    <input
                                        onChange={e => setuserName(e.target.value)}
                                        class="form-control"
                                        id="floatingInput"
                                        value={userName}
                                        required='required'
                                        type='text'
                                        placeholder='userName' />
                                </div>

                                <div className="form-group mt-4">
                                    <label className="text-muted">
                                        Password
                                </label>
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        class="form-control"
                                        id="floatingInput"
                                        value={password}
                                        required='required'
                                        type='password'
                                        placeholder='Password' />

                                </div>

                                <button class="w-100 btn btn-warning mt-4">Sign in</button>
                            </form>

                            <p>Don't have an account? <Link to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return (

        <Registartion childern={LoginForm()}>

        </Registartion>
    )
}

export default Login


