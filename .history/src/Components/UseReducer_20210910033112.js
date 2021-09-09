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

  const [carts, dispatch] = useReducer(cartReducer, initialReducer);


  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {carts.map((product, key) => {
            <tr key={key}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
