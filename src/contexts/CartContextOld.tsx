import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  ActionTypes,
  addToCart,
  changeProductQuantity,
  removeFromCart,
} from '../reducers/cartReducer/actions'
import { Product, cartReducer } from '../reducers/cartReducer/reducer'

interface ProductDTO {
  id: number
  title: string
  price: number
  description: string
  tags: string[]
  imgSource: string
}

interface CartContextType {
  cart: Product[]
  addProductToCart: (product: ProductDTO, quantity: number) => void
  removeProductFromCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        const emptyCart = {
          cart: [],
        }
        return emptyCart
      }
    },
  )
  const { cart } = cartState
  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addProductToCart(product: ProductDTO, quantity: number) {
    if (quantity <= 0) {
      dispatch(removeFromCart(product.id))
    } else {
      dispatch(addToCart(product, quantity))
    }
  }

  function removeProductFromCart(id: number) {
    dispatch(removeFromCart(id))
  }

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
