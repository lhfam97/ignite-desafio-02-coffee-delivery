import { ProductDTO } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY',
}

export function addToCart(product: ProductDTO, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  }
}

export function removeFromCart(id: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function changeProductQuantity(id: number, quantity: number) {
  return {
    type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}
