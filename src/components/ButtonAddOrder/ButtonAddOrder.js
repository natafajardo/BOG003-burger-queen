import React from 'react'
import './style.css'

const ButtonAddOrder = ({message}) => {

    return (
        <button className="btnOrderCocina" onClick={() => {
            alert(message)
        }}>
            <img className="btnOrderCocinaImg"  src="./images/imgButtonAddOrder.png" alt="imgButtonAddOrderImg"/>
            <h1>ENVIAR PEDIDO A COCINA</h1>
        </button>
        
    )
}



export default ButtonAddOrder;