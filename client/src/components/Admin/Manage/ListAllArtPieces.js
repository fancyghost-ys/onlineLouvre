import React, { useState, useEffect } from "react";
import { fetchArtPieces, DeleteArtPiece } from '../../../store/actions/art'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const ListAllArtPieces = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState([])
    useEffect(() => {
        dispatch(fetchArtPieces()).then(res => setValues(res)).catch(err => console.log(err))
    }, [dispatch])

    const removeItem = (id) => {
        dispatch(DeleteArtPiece(id)).then(res => window.location.reload(false)).catch(err => console.log)

    }
    return (
        <div >
            <h3 className="p-4">All Art Pieces In Museum</h3>
            <hr />
            <div className="row">
                {
                    values &&
                    values.map((u, i) => (
                        <div className="col-4 p-3">
                            <div class="card p-2" style={{ width: "12rem;" }}>
                                <img src={u.picture} class="card-img border-0 desc" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{u.artist}</h5>
                                    <p> {u.description.substring(0, 50)}</p>
                                </div>
                                <div class="card-body">
                                    <Link to={`/admin/editArt/${u._id}`} class="card-link btn btn-success">Edit Art</Link>
                                    <button class="card-link btn btn-danger" onClick={() => removeItem(u._id)}>Delete</button>
                                </div>
                            </div>

                        </div>

                    ))}
            </div>

        </div>);
};

export default ListAllArtPieces;