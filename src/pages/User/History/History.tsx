import imgHistory from '../../../assets/img/user_history_undefined.png' 
import './history.css'

export default function History() {

    return (
        <div className='user_history'>
            <img src={imgHistory} alt="" />
            <div>
                <h1>у вас нет заказов</h1>
                <p>сделайте свой первый заказ</p>
            </div>
        </div>
    )
}