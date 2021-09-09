import React, { useReducer } from 'react'

const initialReducer = [
  { id: 1, name: "Iphone", price: 3000, quantity: 1 }
]

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":

      const temp = [...state];
      const index = temp.findIndex(itemCart => itemCart.id === action.item.id)
      if (index !== 1) {
        temp[index].quantity++;
      } else {
        const item = { ...action.type, quantity: 1 }
        temp.push(item)
      }

      return [...state];
    default: return [...state];
  }
}
let arrProduct = [
  { id: 1, name: "iphone", price: 2000 },
  { id: 2, name: "Note", price: 1000 },
  { id: 3, name: "SamSung", price: 30 },
]

export default function UseReducer() {

  const [carts, dispatch] = useReducer(cartReducer, initialReducer);

  const addToCart = (item) => {
    console.log(item)
    const action = {
      type: "addToCart",
      item
    }
    dispatch(action)
  }
  return (
    <div className="container">
      <div className="row">

        {arrProduct.map((item, index) => {
          return <div className="col-3" key={index}>
            <div className="cart">
              <img className="cart-img-top" src={"https://picsum.photos/200/200"} alt={index} />
              <div className="cart-body">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>Add Cart</button>
              </div>
            </div>
          </div>
        })}

      </div>
      <h3>Gio hang</h3>
      <table className="table">
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
            return <tr key={key}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.quantity * product.price}</td>
              <td> <button className="btn btn-danger">X</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
