import React, { useReducer } from 'react'

const initialReducer = [
  { id: 1, name: "Iphone", price: 3000, quantity: 1 }
]

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      return [...state];
    default: return [...state];
  }
}

export default function UseReducer() {



  return (
    <div>

    </div>
  )
}
