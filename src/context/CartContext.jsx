import { createContext, useReducer } from "react";
import { useContext } from "react";
import { CartReducer } from "../reducer/cartReducer";
//creation de l initialState
const initialState = {
  cartlist: [],
  total: 0,
};
//utiliser createcontext et passer en parametre l'initialSate
const CartContext = createContext(initialState);
//Custom Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartlist.concat(product);
    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };
  // const removeFromCart = (product) => {
  //   const updatedCartList = state.cartlist.filter(
  //     (current) => current.id !== product.id
  //   );
  //   updateTotal(updatedCartList);
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: {
  //       products: updatedCartList,
  //     },
  //   });
  // };
  const removeFromCart = (product) => {
    const updatedCartList = state.cartlist.filter(
      (_, index) => index !== state.cartlist.indexOf(product)
    );
    updateTotal(updatedCartList);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };
  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total: total,
      },
    });
  };
  const value = {
    total: state.total,
    cartlist: state.cartlist,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
