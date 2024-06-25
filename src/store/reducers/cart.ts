import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurant[]
  isOpen: boolean
  isAddress: boolean
  isPayment: boolean
  isConfirmed: boolean
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isAddress: false,
  isPayment: false,
  isConfirmed: false,
  isCart: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = cartSlice.actions
export default cartSlice.reducer
