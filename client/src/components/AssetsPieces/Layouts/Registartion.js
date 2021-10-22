import React from 'react'
import './Registartion.css'
const Registartion = ({
    main_title = "Louvre",
    second_title = "Welcome Back, in The Art Home",
    description = "",
    className,
    childern = ''
}) => (
    <div class="container">

        <div class=" split left col-md-6 h-md-100 bg-img">
            <div class="d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                <div class="pt-5 pb-5">
                </div>
            </div>
        </div>

        <div class=" split right col-md-5 p-0 h-md-100 loginarea p-2 ">
            <div class="align-items-center h-md-100 p-3 ">
                <h1 class="logo">{main_title}</h1>
                <hr />
                <p className="title">{second_title} </p>
                <p className="title2">{description}</p></div>
            <div className="container bd"> {childern}

            </div>
        </div>

    </div>

);

export default Registartion;