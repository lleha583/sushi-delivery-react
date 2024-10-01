import Delivery from "../../components/Delivery/Delivery";
import './deliveryPage.css'

export default function DeliveryPage() {
    return (
        <section>
            <Delivery />
            <div className="delivery_info_condition">
                <h2>Условия доставки </h2>
                <p>В настоящее время доставка осуществляется по зоне, выделенной цветом. Минимальная сумма заказа — 12 руб.</p>
                <p className="time">Время работы:</p>
                <p className="timework">с 11:00 до 22:45</p>
            </div>  
        </section>
    )
}