import React, { useEffect, useState } from 'react'
import { fetchArtPieces } from '../../../../store/actions/art'
import { useDispatch } from 'react-redux'
import './ArtList.css'

const ArtsList = () => {
    const dispatch = useDispatch()

    const [values, setValues] = useState([])
    useEffect(() => {
        dispatch(fetchArtPieces()).then(res => setValues(res)).catch(err => console.log(err))
    }, [dispatch])


    return (
        <div className="container-fluid background-1">
            <h3 className="p-4 title">All Art Pieces</h3>
            <hr />
            <div className="row">
                {
                    values &&
                    values.map((u, i) => (
                        <div className="col-4 ">
                            <div className="m-3 border-0 shadow">
                                <img src={u.picture} class="card-img border-0 desc" alt="..." />
                                <div class="hide p-2">
                                    <p className="title-3">Brief Description</p>
                                    <p> {u.description.substring(0, 50)}</p>
                                </div>
                            </div>

                            <div className="card-body">
                                <p className="title-2 blockquote-footer"> {u.artist}</p>
                            </div>
                        </div>

                    ))}
            </div>
        </div>
    );
};

export default ArtsList;
