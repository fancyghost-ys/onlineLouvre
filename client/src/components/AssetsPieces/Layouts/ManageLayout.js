import React from 'react';
import './Registartion.css'

const ManageLayout = ({
    HeaderPage = "Name",
    Description = "Description",
    className,
    childern
}) => {
    return (
        <div className="m-4 p-3">
            <div className='container p-4'>
                <h2>{HeaderPage}</h2>
                <h4 style={{ cursor: 'pointer', color: '#005760' }}>{Description}</h4>
            </div>

            <div className=" container bd-2 p-4">{childern}</div>

        </div>


    )
}


export default ManageLayout;