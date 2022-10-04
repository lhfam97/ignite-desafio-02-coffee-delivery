import { produce } from 'immer'

import { ActionTypes } from './actions'
export interface cartItems {
  id: number
  name: string
  price: number
  description: string
  tags: string[]
  imgSource: string
  quantity: number
}

export interface Coffee {
  id: number
  name: string
  price: number
  description: string
  tags: string[]
  imgSource: string
}

interface CartState {
  cartItems: cartItems[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const productIndex = state.cartItems.findIndex((coffee) => {
          return coffee.id === action.payload.coffee.id
        })

        if (productIndex > -1) {
          draft.cartItems[productIndex].quantity = action.payload.quantity
        } else {
          draft.cartItems.push({
            ...action.payload.coffee,
            quantity: action.payload.quantity,
          })
        }
      })
    case ActionTypes.REMOVE_FROM_CART: {
      const productIndex = state.cartItems.findIndex((product) => {
        return product.id === action.payload.id
      })
      return produce(state, (draft) => {
        if (productIndex > -1) {
          draft.cartItems.splice(productIndex, 1)
        } else {
          return state
        }
      })
    }
    case ActionTypes.CHANGE_PRODUCT_QUANTITY: {
      return produce(state, (draft) => {
        const productIndex = state.cartItems.findIndex((product) => {
          return product.id === action.payload.id
        })

        if (productIndex > -1) {
          const item = draft.cartItems[productIndex]
          draft.cartItems[productIndex].quantity =
            action.payload.type === 'increase'
              ? item.quantity + 1
              : item.quantity - 1
        }
      })
    }

    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.cartItems = []
      })
    }
    default:
      return state
  }
}
