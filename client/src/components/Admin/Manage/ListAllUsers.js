import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../../store/actions/art'
import moment from 'moment'


const ListAllUsers = () => {
    const dispatch = useDispatch()
    const [Allusers, setAllusers] = useState([])

    useEffect(() => {
        dispatch(getAllUsers()).then(res => setAllusers(res)).catch(err => console.log(err))
    }, [dispatch])


    return (
        <div className="contianer-fluid">
            <h3 className="p-4">All Users</h3>

            <div className="row">
                <div className="col-12">
                    <ul className="list-group">
                        <hr />
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong className="col">ID</strong>
                            <strong className="col">UserName</strong>
                            <strong className="col">Phon Number</strong>
                            <strong className="col">Created At</strong>
                            <strong className="col">Last Update</strong>
                        </li>
                        {
                            Allusers &&
                            Allusers.map((u, i) => (
                                <li
                                    key={i}
                                    className="list-group-item d-flex justify-content-between align-items-center">

                                    <p class="col p-1">{(u._id).substring(0, 10)}</p>
                                    <p className="col">{u.userName}</p>
                                    <p className="col">{u.userPhoneNumber}</p>
                                    <p className="col">  {moment(u.createdAt).fromNow()}</p>
                                    <p className="col">{moment(u.updatedAt).fromNow()}</p>
                                </li>
                            ))}
                    </ul>
                    <br />
                </div>
            </div>
        </div>);
};

export default ListAllUsers;