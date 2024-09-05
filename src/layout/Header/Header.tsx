import logo from '../../assets/img/ninjasush-logo.png'
import iconPhone from '../../assets/icons/icon_phone.svg'
import iconNotification from '../../assets/icons/icon_notification.svg'
import iconFavorite from '../../assets/icons/icon_favorite.svg'
import iconUser from '../../assets/icons/icon_user.svg'
import iconBasket from '../../assets/icons/icon_basket.svg'

import './header.css'

export default function Header() {
    return (
        <header> 
            <div className="header_logo">
                <img src={logo} width='100px' />
            </div>
            <nav className="header_navigation">
                <a>Главная</a>
                <a>Доставка</a>
                <a>О нас</a>
                <a>Новости</a>
            </nav>
            <div className="header_contacts">
                <img src={iconPhone} alt="" />
                <p>+38 097 699 34 38</p>
            </div>
            <div className="header_user">
                <img className='header_user_link' src={iconNotification} alt="" />
                <img className='header_user_link' src={iconFavorite} alt="" />
                <img className='header_user_link' src={iconUser} alt="" />
                <div className='header_user_link'>
                    <a>Корзина</a>
                    <img src={iconBasket} alt="" />
                </div>
            </div>
        </header>
    )
}