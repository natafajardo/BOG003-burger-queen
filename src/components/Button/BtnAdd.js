import React from 'react'
import './BtnAdd.css'

const BtnAdd = ({content}) => {
    return (
        <div className="circleAdd">
            <p className="content"> {content} </p>
        </div>
    )
}

export default BtnAdd;
