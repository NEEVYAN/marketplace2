"use client";

import { createContext, PropsWithChildren, useMemo, useReducer } from "react";

// =================================================================================
type InitialState = { cart: CartItem[] };

export type CartItem = {
  qty: number;
  name: string;
  slug: string;
  price: number;
  imgUrl?: string;
  id: string | number;
};

type CartActionType = {
  type: "CHANGE_CART_AMOUNT";
  payload: CartItem;
};

// =================================================================================

const INITIAL_CART = [
  {
    qty: 1,
    price: 210,
    slug: "silver-high-neck-sweater",
    name: "Silver High Neck Sweater",
    id: "6e8f151b-277b-4465-97b6-547f6a72e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              5c9",
    imgUrl: "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
  },
  {
    qty: 1,
    price: 110,
    slug: "yellow-casual-sweater",
    name: "Yellow Casual Sweater",
    id: "76d14d65-21d0-4b41-8ee1-eef4c2232793",
    imgUrl: "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
  },

];

const INITIAL_STATE = { cart: INITIAL_CART };

// ==============================================================
interface ContextProps {
  state: InitialState;
  dispatch: (args: CartActionType) => void;
}
// ==============================================================

export const CartContext = createContext<ContextProps>({} as ContextProps);

const reducer = (state: InitialState, action: CartActionType) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      }

     
      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );

        return { ...state, cart: newCart };
      }



      return { ...state, cart: [...cartList, cartItem] };

    default: {
      return state;
    }
  }
};

export default function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <CartContext.Provider value={contextValue}>
    {children}
    </CartContext.Provider>;
}
