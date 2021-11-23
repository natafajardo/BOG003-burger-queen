import React from 'react';
import './OrderList.css';
import Table from 'react-bootstrap/Table';

const OrderList = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" className="order-table">
  <thead>
    <tr className="Order-list">
      <th>Cantidad</th>
      <th>Producto</th>
      <th>Precio</th>
      <th>
        <button className="btn-Order-list">
          <img src="./images/trash.png" alt="" />
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default OrderList;
