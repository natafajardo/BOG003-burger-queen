import React, { useContext } from 'react';
import { useState } from 'react';
import './CustomOrder.css';
import OrderContext from '../../context/OrderContext';

const CustomOrder = ({ setToogleOrder, firstTitle, items, setOrder, order, onClickOk }) => {
  const { dispatchProductEvent } = useContext(OrderContext);
  const [count, setCount] = useState(1);
  
  const addProduct = (item) => {
    const { title, price } = { ...item };
    const product = { title, price };
    product.amount = count;
    dispatchProductEvent('ADD_PRODUCT', { newProduct: product });
  }

  return (
    <div className="custom-order">
      <div className="closeCustomeOrder">
        {<button className="closeOrder" onClick={() => {
          setToogleOrder(false)
        }}>X</button>}
        <h3 className="titleOrder">{firstTitle.toUpperCase()}</h3>
      </div>
      <div>
        <img src={items[0].img} alt={items[0].title} />
      </div>
      <div className="style-space"></div>
      <h4 className="title">INGREDIENTES</h4>
      <ul className="list">
        {items[0].remove.map((item, index) => {
          return (
            <li key={index}>{item.toUpperCase()}</li>
          )
        })}
      </ul>
      <div className="style-space" ></div>
      <h4 className="title">ADICIONAR</h4>
      <div className="orderRow" >
        {items[0].add.map((item, index) => {
          return (
            <div className="recipe-items" key={index}>
              <input type="checkbox" value={item} name="add" onChange={(e) => {
                if (e.target.checked === true) {
                  setOrder(order => {
                    return { ...order, add: { item } }
                  })
                  console.log(order);
                }
              }} />
              <p>{item.toUpperCase()}</p>
            </div>
          )
        })}
      </div>
      <div className="style-space" ></div>
      <div className="additions">
        <div className="circleAdd" onClick={() => { count > 1 && setCount(count - 1) }}>
          <span className="content"> {"-"} </span>
        </div>
        <span> {count} </span>
        <div className="circleAdd" onClick={() => { setCount(count + 1) }} >
          <span className="content"> {"+"} </span>
        </div>
      </div>
      <div className="style-space"></div>
      <div className="btnCloseCustom">
        <button className="btnCustom" onClick={() => {
          addProduct(items[0]);
          setToogleOrder(false);
        }}>
          <img className="btnCustomImg" src="./images/ok.png" alt="confirmar" />
          Añadir
        </button>
      </div>
    </div>
  )
}

export default CustomOrder;
