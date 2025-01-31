import { PiShoppingCartFill } from "react-icons/pi";
import "./navbar.css"

const CartWidget = () => {
    return(
        <div className="cart-widget">
            
            <PiShoppingCartFill size={30} color="white"/>
            <h2>2</h2>
        </div>
    )
}

export default CartWidget