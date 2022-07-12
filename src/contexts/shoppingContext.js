import { createContext, useReducer } from "react";

export const shoppingContext = createContext();

export const shoppingCardActions = {
  add: "ADD_PRODUCT",
  remove: "REMOVE_PRODUCT",
  reject: "REJECTED",
};

function shoppingCardReducer(state, action) {
  switch (action.type) {
    case shoppingCardActions.add:
      return {
        ...state,
        products: [...state.products, action.payload],
        status: "success",
      };
    case shoppingCardActions.remove:
      return { ...state, products: action.payload, status: "success" };
    case shoppingCardActions.reject:
      return { ...state, status: "reject" };
    default:
      return state;
  }
}

const ShoppingContextProvider = ({ children }) => {
  const [shoppingCard, dispatch] = useReducer(shoppingCardReducer, {
    products: [],
    status: "idle",
  });

  function shoppingCardDispatchMiddleware(dispatch) {
    return function (data, action) {
      switch (action.type) {
        case "ADD_PRODUCT":
          const product = shoppingCard.products.find(
            (item) => item.id === data.id
          );
          if (!product)
            return dispatch({
              type: shoppingCardActions.add,
              payload: data,
            });
          else
            return dispatch({
              type: shoppingCardActions.reject,
            });
            case "DELETE_PRODUCT":
             const filtredProducts =  shoppingCard.products.filter(item => item.id !== data);
             dispatch({type:shoppingCardActions.remove , payload: filtredProducts});
        default:
          break;
      }
    };
  }

  return (
    <shoppingContext.Provider
      value={{ shoppingCard, dispatch, shoppingCardDispatchMiddleware }}
    >
      {children}
    </shoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
