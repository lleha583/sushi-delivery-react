import './checkoutform.css'
import mapPoint from '../../assets/icons/icon_map-point.svg'
import { useEffect, useState } from 'react'
import { IUser } from '../../interface/interface';

export default function CheckoutForm({user} : {user: IUser}) {



    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [delivery, setDelivery] = useState<string | number>(0);
    const [pay, setPay] = useState(0);

    useEffect(() => {
        console.log(user.data.addresses);
        if (user.status === true) {
            setName(user.data.username!)
            setNumber(user.data.number!)
            if (user.data.addresses !== null) setDelivery(user.data.addresses!)
        }
    }, [user])

    return (
        <div className="checkoutform">
            <div className="checkoutform_name checkout_block">
                <h2>Личные данные</h2>
                <input type="text" placeholder="имя*" onChange={(e) => { setName(e.target.value) }} value={name} />
                <input type="text" placeholder="телефон*" onChange={(e) => { setNumber(e.target.value) }} value={number} />
            </div>
            <div className="checkoutform_delivery checkout_block">
                <h2>Доставка</h2>
                <div className='checkoutform_delivery_btn'>
                    <button onClick={() => { setDelivery(0) }} className={(delivery === 0) ? 'btn_checkout active' : 'btn_checkout'}>Доставка</button>
                    <button onClick={() => { setDelivery(1) }} className={(delivery === 1) ? 'btn_checkout active' : 'btn_checkout'}>Самовывоз</button>
                </div>
                {
                    (!delivery &&
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
                    )
                    
                }

                    
            </div>
            <div className="checkoutform_pay checkout_block">
                <h2>Способ оплаты</h2>
                <div className='checkoutform_pay__inner'>
                    <label>
                        <input onClick={() => { setPay(0) }} type="radio" name="pay" value={pay} checked />Наличными курьеру
                    </label>
                    <label>
                        <input onClick={() => { setPay(1) }} type="radio" name="pay" value={pay} />Терминалом
                    </label>
                    <label>
                        <input onClick={() => { setPay(2) }} type="radio" name="pay" value={pay} />Онлайн
                    </label>
                </div>
            </div>
        </div>
    )
}