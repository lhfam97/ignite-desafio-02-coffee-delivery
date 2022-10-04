import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addToCart(coffee: Coffee, quantity: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
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

export function changeProductQuantity(
  id: number,
  type: 'increase' | 'decrease',
) {
  return {
    type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
    payload: {
      id,
      type,
    },
  }
}

export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
