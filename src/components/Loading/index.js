import React from "react";
import "./loading.css";
import loading from "./gif/loading-arrow.gif";

export default function Loading({ preloader }) {
    return (
        <div className='loading'>
            <img src={preloader || loading} alt='loading' />
        </div>
    )
}