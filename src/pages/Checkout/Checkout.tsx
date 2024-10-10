import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import './checkout.css';
import { IState } from "../../interface/interface";


export default function Checkout() {

    const state = useSelector((state: IState) => { return state })

    return (
        <section className="checkout">
            <CheckoutForm user={state.user} />
            <div className="checkout_basket">
                <Basket />
                <div className="checkout_info">
                    
                    <button>оформить заказ</button>
                </div>
            </div>
        </section>
    )
}