import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../../store/actions/auth'
import Registartion from '../../AssetsPieces/Layouts/Registartion'

const Register = ({ history }) => {

    const dispatch = useDispatch()

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const [userPhoneNumber, setuserPhone] = useState()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(register({ userName, password, userPhoneNumber }, history))
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

    const Registerform = () => {
        return (
            <div className="p-2">
                <div className='card-shadow'>
                    <div id='form-section'>
                        {showError()}
                        {showSuccess()}

                        <div id='form-section'>
                            <h2>Create an account</h2>

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
                                        placeholder='Your name' />
                                </div>

                                <div className="form-group mt-4">
                                    <label className="text-muted">
                                        Phone Number
                                </label>
                                    <input
                                        onChange={e => setuserPhone(e.target.value)}
                                        value={userPhoneNumber}
                                        class="form-control"
                                        id="floatingInput"
                                        required='required'
                                        type='number'
                                        placeholder='Phone Number' />
                                </div>

                                <div className="form-group mt-4">
                                    <label className="text-muted">
                                        Password
                                </label>
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        class="form-control"
                                        id="floatingInput"
                                        required='required'
                                        type='password'
                                        placeholder='Password' />
                                </div>


                                <button class="w-100 btn btn-warning mt-4">REGISTER</button>
                            </form>

                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }


    return (
        <Registartion second_title="Hello New Art Connoisseur" childern={Registerform()}>

        </Registartion>
    )
}
export default Register