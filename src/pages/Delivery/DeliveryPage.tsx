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

            <div className="delivery_any">

                <div className="delivery_info">
                    <h1>Как сделать заказ</h1>
                    <span>Выберите наиболее удобный способ</span>
                    <div className="delivery_info__block">
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>На сайте</p>
                        </div>
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>в млбильном приложении</p>
                        </div>
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>по телефону</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_info">
                    <h1>Как сделать заказ</h1>
                    <span>Выберите наиболее удобный способ</span>
                    <div className="delivery_info__block">
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>На сайте</p>
                        </div>
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>в млбильном приложении</p>
                        </div>
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>по телефону</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_info">
                    <h1>Как сделать заказ</h1>
                    <span>Выберите наиболее удобный способ</span>
                    <div className="delivery_info__block">
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>На сайте</p>
                        </div>
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>в млбильном приложении</p>
                        </div>
                        <div className="delivery_info__block__inner">
                            <img src="" alt="icon" />
                            <p>по телефону</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}