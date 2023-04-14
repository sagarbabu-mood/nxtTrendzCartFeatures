import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const numberOfItems = cartList.length
      let amount = 0
      cartList.forEach(eachCartItem => {
        amount += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div>
            <h1>
              Order Total: <span className="amount">Rs {amount}/- </span>
            </h1>
            <p>{numberOfItems} items in cart</p>
            <button className="button" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
