import React from 'react'
import './BtnAdd.css'



const BtnAdd = ({content, count, setCount}) => {

    const prueba = () =>{
        console.log("click");
      }

    return (
        <div className="circleAdd"  onClick={prueba} >
            <p className="content"> {content} </p>
        </div>
    )
}

export default BtnAdd;
