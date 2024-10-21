import './checkoutform.css'
import mapPoint from '../../assets/icons/icon_map-point.svg'
import { useMemo } from 'react'
import { IOrder, IUser } from '../../interface/interface';

interface IProps {
    user: IUser,
    order: IOrder,
    setOrder: (order: IOrder) => void
}

export default function CheckoutForm({user, order, setOrder }: IProps) {
    
    return useMemo(() => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setOrder({
                ...order,
                [name]: value
            });
        }
    
        return (
            <div className="checkoutform">
                <div className="checkoutform_name checkout_block">
                    <h2>Личные данные</h2>
                    <input
                        type="text"
                        placeholder="имя*"
                        name="name"
                        onChange={handleChange}
                        value={order.name}
                    />
                    <input
                        type="text"
                        name="number"
                        placeholder="телефон*"
                        onChange={handleChange}
                        value={order.number}
                    />
                </div>
                <div className="checkoutform_delivery checkout_block">
                    <h2>Доставка</h2>
                    <div className='checkoutform_delivery_btn'>
                        <button
                            onClick={() => { setOrder({ ...order, delivery: 0 }) }}
                            className={(order.delivery === 0) ? 'btn_checkout active' : 'btn_checkout'}
                        >Доставка</button>
                        <button
                            onClick={() => { setOrder({ ...order, delivery: 1 }) }}
                            className={(order.delivery === 1) ? 'btn_checkout active' : 'btn_checkout'}
                        >Самовывоз</button>
                    </div>
                    {
                        (!order.delivery) ? (
                            (user.data.addresses !== null) ? (
                                <div className='checkoutform_delivery_adress adress_active'>
                                    <div className='checkoutform_delivery_adress__inner'>
                                        <img src={mapPoint} width='35px' />
                                        <div>
                                            <h3>{user.data.addresses!}</h3>
                                            <p>улица</p> 
                                        </div>
                                    </div>
                                    <input className='input_checkout' type="radio" checked={true} />
                                </div>
                            ) : (
                                <button className='btn_address' onClick={() => { }}>Добавить</button>
                            )
                        ) : ''
                    }
                </div>
                <div className="checkoutform_pay checkout_block">
                    <h2>Способ оплаты</h2>
                    <div className='checkoutform_pay__inner'>
                        <label>
                            <input
                                onChange={() => { setOrder({ ...order, pay: 0 }) }}
                                type="radio"
                                name="pay"
                                checked={order.pay === 0}
                                defaultChecked
                            />Наличными курьеру
                        </label>
                        <label>
                            <input
                                onChange={() => { setOrder({ ...order, pay: 1 }) }}
                                type="radio"
                                name="pay"
                                checked={order.pay === 1}
                            />Терминалом
                        </label>
                        <label>
                            <input
                                onChange={() => { setOrder({ ...order, pay: 2 }) }}
                                type="radio"
                                name="pay"
                                checked={order.pay === 2}
                            />Онлайн
                        </label>
                    </div>
                </div>
            </div>
        )
    }, [user, order])
}