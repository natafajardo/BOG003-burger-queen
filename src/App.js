import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Waiter from './pages/Waiter/Waiter';
import Chef from './pages/Chef/Chef';

import { ProviderOrder } from './context/OrderContext';

const App = () => {
  const [ order, setOrder ] = useState([]);

  const dispatchProductEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_PRODUCT':
				setOrder([ ...order, payload.newProduct ]);
				return;
			case 'REMOVE_PRODUCT':
				setOrder(order.filter(item => item.title !== payload.productTitle));
				return;
			case 'CLEAN_ORDER':
				setOrder([]);
				return;
			default:
				return;
		}
	};

  return (
    <ProviderOrder value={{order, dispatchProductEvent}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tables" element={<Waiter />} />
          <Route path="kitchen" element={<Chef />} />
        </Routes>
      </BrowserRouter>,
    </ProviderOrder>
  )
}

export default App