import { PiShoppingCartFill } from "react-icons/pi";
import "./cartWidget.css"

const CartWidget = () => {
    return(
        <div className="cart-widget">
            
            <PiShoppingCartFill size={50} color="white"/>
            <h2>2</h2>
        </div>
    )
}

export default CartWidget