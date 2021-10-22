import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Menu from '../../AssetsPieces/Menu/Menu'
import Footer from '../../Guset/Home/Footer/Footer'
import ListAllArtPieces from './ListAllArtPieces'
import ListAllUsers from './ListAllUsers'

const AdminDashboard = () => {
    const user = useSelector(state => state.authReducer.user)
    const [showAllUsers, setshowAllUsers] = useState(true)
    const [showAllArtPieces, setshowAllArtPieces] = useState(false)


    const AdminOptions = () => {
        return (
            <div>
                <h4 className="card-header">Admin Functions</h4>
                <ul className="nav flex-column">
                    <li className="list-group-item">
                        <button className="btn" onClick={() => [setshowAllUsers(true), setshowAllArtPieces(false)]}>
                            List All Users
                 </button>
                    </li>
                    <li className="list-group-item">
                        <button className="btn" onClick={() => [setshowAllUsers(false), setshowAllArtPieces(true)]}>
                            List All ArtPieces
                        </button>
                    </li>
                    <li className="list-group-item">
                        <Link className="btn btn-white" to="/admin/addNew">Add New Piece </Link>
                    </li>

                </ul>
            </div>
        )
    }
    return (
        <div>
            <Menu user={user} />
            <div className="container-fluid row">
                <div className="col-3">
                    {AdminOptions()}
                </div>
                <div className="col-9">
                    {!showAllArtPieces && showAllUsers && <ListAllUsers />}
                    {!showAllUsers && showAllArtPieces && <ListAllArtPieces />}

                </div>

            </div>

            <Footer />
        </div>
    );
}

export default AdminDashboard