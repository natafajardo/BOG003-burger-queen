import React from 'react';

const OrderContext = React.createContext();

export const ProviderOrder = OrderContext.Provider;
export const ConsumerOrder = OrderContext.Consumer;

export default OrderContext;