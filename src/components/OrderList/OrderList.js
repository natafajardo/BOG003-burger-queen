import React, { useContext } from 'react';
import './OrderList.css';

import OrderContext from '../../context/OrderContext';

const OrderList = () => {
  const { dispatchProductEvent } = useContext(OrderContext);
  const { order } = useContext(OrderContext);

  const removeProduct = (item) => {
    dispatchProductEvent('REMOVE_PRODUCT', { productTitle: item.title });
  }

  let totalPrice = 0;
  return (
    <div className="order-list">
      <ul>
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
    </div>
  )
}

export default OrderList;
