import Basket from "../../components/Basket/Basket";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import './checkout.css';


export default function Checkout() {
    return (
        <section className="checkout">
            <CheckoutForm />
            <div className="checkout_basket">
                <Basket />
                <div className="checkout_info">
                    
                    
                </div>
            </div>
        </section>
    )
}