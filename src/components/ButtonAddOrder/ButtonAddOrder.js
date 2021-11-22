import React from 'react'
import './style.css'

const ButtonAddOrder = ({ message }) => {

  return (
    <button className="btnOrderCocina" onClick={() => {
      alert(message)
    }}>
      <img className="btnOrderCocinaImg" src="./images/imgButtonAddOrder.png" alt="imgButtonAddOrderImg" />
      <p className="titleBtn">ENVIAR PEDIDO A COCINA</p>
    </button>

  )
}

export default ButtonAddOrder;