import imgMapPoint from '../../../assets/img/user_adress.jpg'
import './adress.css'

export default function Adress() {
    return (
        <div className='user_adress'>
            <img src={imgMapPoint} alt="" />
            <div>
                <h1>у вас нет сохраненных адресов</h1>
                <p>сделайте свой первый заказ и адрес сохранится автоматически</p>
            </div>
        </div>
    )
}