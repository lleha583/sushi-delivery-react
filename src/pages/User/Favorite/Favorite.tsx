import imgFavorite from '../../../assets/img/user_favorite.png'
import './favorite.css'

export default function Favorite() {
    return (
        <div className='user_favorite'>
            <img src={imgFavorite} alt="" />
            <div>
                <h1>у вас нет сохраненных адресов</h1>
                <p>сделайте свой первый заказ и адрес сохранится автоматически</p>
            </div>
        </div>
    )
}