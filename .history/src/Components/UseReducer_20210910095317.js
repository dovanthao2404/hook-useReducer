import React, { useReducer } from 'react'

const initialReducer = [
  // { id: 1, name: "Iphone", price: 1000, quantity: 1 }
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      // console.log("state", state)
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id)
      if (index !== -1) {
        // cartUpdate = cartUpdate.map((item, key) => {
        //   if (index !== key) {
        //     return item
        //   }
        //   const itemCart = { ...item }
        //   itemCart.quantity++;
        //   return itemCart;
        // })
        // Truoc khi tang
        // console.log("quantity: truoc ", cartUpdate[index].quantity)
        // console.log("arr: truoc ", cartUpdate)
        // Tang
        // Sau khi tang
        // console.log("quantity: sau ", cartUpdate[index].quantity)
        // console.log("arr: sau ", cartUpdate)
      } else {
        cartUpdate[index].quantity++;
        const itemCart = { ...action.item, quantity: 1 };
        cartUpdate.push(itemCart)
      }
      // console.log(cartUpdate)
      return [...cartUpdate]
    }
    default: return [...state];
  }
}
let arrProduct = [
  { id: 1, name: "iphone", price: 500 },
  { id: 2, name: "Note", price: 200 },
  { id: 3, name: "SamSung", price: 700 },
]

export default function UseReducer() {

  const [cart, dispatch] = useReducer(cartReducer, initialReducer);

  const addToCart = (itemClick) => {
    const action = {
      type: "addToCart",
      item: itemClick
    }
    dispatch(action)
  }
  // console.log("return", cart)
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
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, key) => {
            const newProduct = { ...product };
            const total = newProduct.quantity * newProduct.price
            // console.log("newProduct", newProduct.quantity)
            return <tr key={key}>
              <td>{newProduct.id}</td>
              <td>{newProduct.name}</td>
              <td>{newProduct.price}</td>
              <td>{console.log("quantity td: ", newProduct.quantity,) || newProduct.quantity}</td>
              <td>{total}</td>
              <td> <button className="btn btn-danger">X</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
