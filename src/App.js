import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from 'redux';

//reducer
import reducer from './reducer';

//react-redux - provider wraps app, and connect is used to pass values
import { Provider } from 'react-redux';

//initial store/ state
const initStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}


//dispatches
const store = createStore(reducer, initStore)


function App() {
  // cart setup

  //provider from react-redux
  return (
    <Provider store={store}>
      {/* pass down store.getstate for counter in navbar */}
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
