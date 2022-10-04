import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

import { cartReducer } from '../reducers/cartReducer/reducer'
import {
  addToCart,
  changeProductQuantity,
  clearCart,
  removeFromCart,
} from '../reducers/cartReducer/actions'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        const emptyCart = {
          cartItems: [],
        }
        return emptyCart
      }
    },
  )

  const { cartItems } = cartState
  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, stateJSON)
  }, [cartState])
  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: Coffee, quantity: number) {
    dispatch(addToCart(coffee, quantity))
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    dispatch(changeProductQuantity(cartItemId, type))
  }

  function removeCartItem(id: number) {
    dispatch(removeFromCart(id))
  }
  function cleanCart() {
    dispatch(clearCart())
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
