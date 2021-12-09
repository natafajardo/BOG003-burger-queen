import React, { useContext, useState } from 'react';
import ButtonAddOrder from "../ButtonAddOrder/ButtonAddOrder";
import './OrderList.css';
import OrderContext from '../../context/OrderContext';

import { db } from '../../firebase/firebaseconfig';
import { collection, addDoc } from "firebase/firestore";

const orderid = require('order-id')('key');

const OrderList = ({ table }) => {
  let newOrder = { table };
  const { dispatchProductEvent } = useContext(OrderContext);
  const { order } = useContext(OrderContext);
  const [inputGuest, setInputGuest] = useState('');
  const [hideInput, setHideInput] = useState(false);

  const removeProduct = (item) => {
    dispatchProductEvent('REMOVE_PRODUCT', { productTitle: item.title });
  }

  const addGuest = () => {
    setHideInput(true);
  }

  const sendOrder = async () => {
    const id = orderid.generate();
    newOrder.guest = inputGuest;
    newOrder.products = order;
    let orderPrice = 0;

    if (order.length > 1) {
      orderPrice = order.reduce((acc, cur) => (acc.price * acc.amount) + (cur.price * cur.amount));
    } else {
      orderPrice = order[0].price;
    }

    newOrder.price = orderPrice;
    newOrder.orderId = id;
    console.log(newOrder);

    try {
      const docRef = await addDoc(collection(db, 'orders'), newOrder);
      console.log("Document written with ID: ", docRef.id);
      dispatchProductEvent('CLEAN_ORDER');
      newOrder = { };
      setInputGuest('');
      setHideInput(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  let totalPrice = 0;

  return (
    <div className="order-list">
      <div className={`guest ${hideInput ? 'hide' : ''}`}>
        <input onChange={e => setInputGuest(e.target.value)} value={inputGuest} type="text" placeholder="Nombre del cliente" />
        <button onClick={addGuest}>Agregar Cliente</button>
      </div>

      <div className={`guest-name ${!hideInput ? 'hide' : ''}`}>
        <div className="info">
          <span className="label">Cliente:&nbsp;</span>
          <span className="gname">{inputGuest}</span>
        </div>
        <button onClick={e => setHideInput(false)}>Editar</button>
      </div>

      <ul className="product-list">
        {order.map((item, index) => {
          totalPrice += item.price * item.amount;
          return (
            <li key={index}>
              <div className="amount">
                <span className="text-item">{item.amount}</span>
              </div>
              <div className="title">
                <span className="text-item">{item.title}</span>
              </div>
              <div className="price">
                <span className="text-item">{item.price * item.amount}</span>
              </div>
              <button className="btn-Order-list" onClick={() => { removeProduct(item) }}>
                <img src="./images/trash.png" alt="" />
              </button>
            </li>
          )
        })}
        <div className="total">
          <strong>Total: {totalPrice}</strong>
        </div>
      </ul>
      <ButtonAddOrder emmitEvent={sendOrder} disabled={!newOrder.table || !hideInput} />
    </div>
  )
}

export default OrderList;