import { useSelector } from "react-redux";
import Basket from "../../components/Basket/Basket";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import './checkout.css';
import { IOrder, IState } from "../../interface/interface";
import { useState } from "react";
import { checkoutPost } from "../../services/checkoutPost";

export default function Checkout() {

    const state = useSelector((state: IState) => { return state })
    const totalPrice = state.basket.reduce((sum, item) => sum + item.price, 0)

    const [order, setOrder] = useState<IOrder>({
        name: '',
        number: '',
        delivery: 0,
        pay: 0
    })

    return (
        <section className="checkout">
            <CheckoutForm user={state.user} order={order} setOrder={setOrder} />
            <div className="checkout_basket">
                <Basket />
                <div className="checkout_info">
                    <div>
                    <h3>Cтоимость:</h3>
                    <p>{totalPrice}p.</p>
                    </div>
                    <button
                        className='basket_btn_get'
                        onClick={() => {checkoutPost(state.basket, order)}}
                    >оформить заказ</button>
                </div>
            </div>
        </section>
    )
}