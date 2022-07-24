import { createContext, useReducer } from "react";

export const shoppingContext = createContext();

export const shoppingCardActions = {
  add: "ADD_PRODUCT",
  remove: "REMOVE_PRODUCT",
  edit: "EDIT_PRODUCRT",
  reject: "REJECTED",
};

function shoppingCardReducer(state, action) {
  switch (action.type) {
    case shoppingCardActions.remove:
      return {
        ...state,
        products: [...action.payload],
        status: "success",
      };
      break;
    case shoppingCardActions.add:
      return {
        ...state,
        products: [...state.products, action.payload],
        status: "success",
      };
      break;
      // case shoppingCardActions.edit:
      //   return {
      //     ...state,
      //     products: action.payload,
      //     status: "success",
      //   };
      break;
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

  function shoppingCardDispatchMiddleware(disp) {
    return function (data, action) {
      switch (action.type) {
        case "ADD_PRODUCT":
          const product = shoppingCard.products.find(
            (item) => item.id === data.id
          );
          if (!product)
            return disp({
              type: shoppingCardActions.add,
              payload: data,
            });
          else
            return disp({
              type: shoppingCardActions.reject,
            });
        case "DELETE_PRODUCT":
          const filtredProducts = shoppingCard.products.filter(
            (item) => item.id !== data
          );
          disp({
            type: shoppingCardActions.remove,
            payload: filtredProducts,
          });
        case "EDIT_PRODUCT":
          const filtredEditingProduct = shoppingCard.products.filter(
            (item) => item.id === data
          )[0];
          const updatedProduct = {
            ...filtredEditingProduct,
            count: action.payload,
          };
          const filtredEditingProductForDelete = shoppingCard.products.filter(
            (item) => item.id !== data
          );
          filtredEditingProductForDelete.push(updatedProduct);
          return disp({
            type: shoppingCardActions.edit,
            payload: filtredEditingProductForDelete,
          });
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
