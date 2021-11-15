import React from 'react';
import { useState } from 'react';
import './CustomOrder.css';

const CustomOrder = ({ setToogleOrder, firstTitle, data, onClickOk }) => {

  const [count, setCount] = useState(1);

    return (
        <div className="custom-order">
            <div className= "closeCustomeOrder">
              {<button className="closeOrder" onClick={() => {
                setToogleOrder(false)
              }}>X</button>}
              <h3 className="titleOrder">{firstTitle.toUpperCase()}</h3>
            </div>
            <div>
                <img src={data[0].img} alt={data[0].title} />
            </div>
            <div className="style-space"></div>
            <h4 className="title">INGREDIENTES</h4>
            <ul className="list">
                {data[0].remove.map((item, index) => {
                  return (
                    <li key={index}>{item.toUpperCase()}</li>
                  )
                })}
            </ul>
            <div className="style-space" ></div>
            <h4 className="title">ADICIONAR</h4>
            <div className= "orderRow" >
                {data[0].add.map((item, index) => {
                  return (
                  <div className="recipe-items" key={index}>
                      <input type="checkbox" value={item} onChange={()=>{}} />
                      <p>{item.toUpperCase()}</p>
                    </div>
                  )
                })}
            </div>
            <div className="style-space" ></div>
            <div className="additions">
              <div className="circleAdd" onClick={ ()=>{count>1 && setCount(count-1)} }>
                <p className="content"> {"-"} </p>
              </div>
                <span> {count} </span>
              <div className="circleAdd" onClick={ ()=>{setCount(count+1)} } >
                <p className="content"> {"+"} </p>
              </div>
            </div>
            <div className="style-space"></div>
            <div className="btnCloseCustom">
              <button className="btnCustom" onClick={() => {
                  /* const product = {...data[0]}
                  product.remove =  */
                  onClickOk(count/* , product */);
                  setToogleOrder(false);
              }}>
                <img className="btnCustomImg" src="./images/ok.png" alt="confirmar"/>
                <p>OK</p>
              </button>
            </div>
        </div>
    )
}

export default CustomOrder
