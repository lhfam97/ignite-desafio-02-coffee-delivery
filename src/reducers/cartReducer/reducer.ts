import { produce } from 'immer'

import { ActionTypes } from './actions'
export interface Product {
  id: number
  title: string
  price: number
  description: string
  tags: string[]
  imgSource: string
  quantity: number
}

export interface ProductDTO {
  id: number
  title: string
  price: number
  description: string
  tags: string[]
  imgSource: string
}

interface CartState {
  cart: Product[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const productIndex = state.cart.findIndex((product) => {
          return product.id === action.payload.product.id
        })

        if (productIndex > -1) {
          draft.cart[productIndex].quantity = action.payload.quantity
        } else {
          draft.cart.push({
            ...action.payload.product,
            quantity: action.payload.quantity,
          })
        }
      })
    case ActionTypes.REMOVE_FROM_CART: {
      const productIndex = state.cart.findIndex((product) => {
        return product.id === action.payload.id
      })
      return produce(state, (draft) => {
        if (productIndex > -1) {
          draft.cart.splice(productIndex, 1)
        } else {
          return state
        }
      })
    }
    case ActionTypes.CHANGE_PRODUCT_QUANTITY: {
      return produce(state, (draft) => {
        const productIndex = state.cart.findIndex((product) => {
          return product.id === action.payload.product.id
        })

        if (productIndex > -1) {
          draft.cart[productIndex].quantity = action.payload.quantity
        } else {
          draft.cart.push({
            ...action.payload.product,
            quantity: action.payload.quantity,
          })
        }
      })
    }
    default:
      return state
  }
}
