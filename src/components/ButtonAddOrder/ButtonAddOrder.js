import React from 'react'
import './style.css'

const ButtonAddOrder = ({ emmitEvent, disabled }) => {

  return (
    <button className={`btnOrderCocina ${disabled ? 'disabled' : ''}`} onClick={() => {emmitEvent()}} disabled={disabled}>
      <img className="btnOrderCocinaImg" src="./images/imgButtonAddOrder.png" alt="imgButtonAddOrderImg" />
      <p className="titleBtn">ENVIAR PEDIDO A COCINA</p>
    </button>

  )
}

export default ButtonAddOrder;