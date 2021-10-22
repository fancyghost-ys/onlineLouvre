import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../../store/actions/auth'
import { useDispatch } from 'react-redux'
import IMG from '../../../Assets/nav/users/user@1x.svg'
import './Menu.css'

const isCurrentPage = (history, path) => {
    if (history.location.pathname === path) {
        return {
            color: '#ffffff',
            borderBottom: "3px solid #ffda00",
            borderRaduis: '1%'
        }
    }
    else {
        return { color: '#EDF5E1' }
    }
}

const Menu = ({ history, user }) => {
    const dispatch = useDispatch()

    return (
        <div class="container-fluid d-flex flex-wrap bg-black justify-content-center py-3  border-bottom">

            <h1 class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none logo">
                <span style={{ fontSize: '1em' }}>L</span><span style={{ fontSize: '0.5em' }}>OUVRE</span>
            </h1>
            <ul class="nav nav-pills">
                {!user &&
                    <Fragment>

                        <li className="nav-item">
                            <Link className="nav-link" style={isCurrentPage(history, '/login')} to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isCurrentPage(history, '/register')} to="register">Register</Link>
                        </li>
                    </Fragment>
                }
                {user && user.role === 2 &&
                    (
                        <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" style={isCurrentPage(history, '/guest/home')} to="/guest/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <p btn className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => dispatch(logout())}>Logout</p>
                            </li>

                            <li className="nav-item img-profile">
                                <p className="nav-link pp " style={{ cursor: 'pointer', color: '#ffffff' }}>
                                    {user.userName}
                                    <img className="img" width="35" height="35" src={IMG} alt='avatar' />
                                </p>
                            </li>

                        </Fragment>

                    )
                }

                {user && user.role === 1 &&
                    (
                        <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link bg-warning" style={isCurrentPage(history, '/admin/dashboard')} to="/admin/dashboard">Staff Only</Link>
                            </li>
                            <li className="nav-item">
                                <p btn className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => dispatch(logout())}>Logout</p>
                            </li>

                            <li className="nav-item img-profile">
                                <p className="nav-link pp " style={{ cursor: 'pointer', color: '#ffffff' }}>
                                    {user.userName}
                                    <img className="img" width="35" height="35" src={IMG} alt='avatar' />
                                </p>
                            </li>

                        </Fragment>

                    )
                }

            </ul>
        </div>
    )
}

export default withRouter(Menu);

