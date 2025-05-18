import React, { useState } from 'react'
import '../../assets/styles/cartitems.css'

const CartItems = () => {
  let [cart, setCart] = useState([])
  let cartFetch = async () => {
    let cartapi = await fetch(`http://localhost:4000/cart`)
    let cartdata = await cartapi.json()
    setCart(cartdata)
  }
  cartFetch()
  //  console.log(cart);
  let deleteCart=(id,title)=>{
    let deleteBool=window.confirm(`do you want to delete ${title} book?`)
    if(deleteBool)
    {
        fetch(`http://localhost:4000/cart/${id}`, {method : 'DELETE'})
        alert(`${title} is deleted`)
    }
    else{
        alert(`${title} is not deleted`)
    }
}
  return (
    <>
      <div className="cartitems">
        <div className="header">
          <h1>Cart Items</h1>
        </div>
        <div className="container">
          {
            cart.map((elem) => {
              let { id, title, thumbnailUrl, authors, pageCount } = elem

              return (
                <>
                  <div className="card">
                    <div className="image">
                      <img src={thumbnailUrl} alt="" />
                    </div>
                    <div className="title">
                      {title}
                    </div>
                    <div className="authors">
                      {authors}
                    </div>
                    <div className="pagecount">
                     Page Count : {pageCount}
                    </div>
                    <div className="btns">
                      <button className="delete" onClick={() =>deleteCart(id, title)}>
                        Delete book
                      </button>
                    </div>
                  </div>
                </>
              )

            })
          }
        </div>
      </div>

    </>
  )
}

export default CartItems
