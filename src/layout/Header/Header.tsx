import logo from '../../assets/img/ninjasush-logo.png'
import iconPhone from '../../assets/icons/icon_phone.svg'
import iconFavorite from '../../assets/icons/icon_favorite.svg'
import iconUser from '../../assets/icons/icon_user.svg'
import { IconNotification } from '../../assets/icons/IconNotification'
import { IconBasket } from '../../assets/icons/IconBasket'
import './header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Basket from '../../components/Basket/Basket'
import Notifications from '../../components/Notifications/Notifications'

export default function Header() {

    const [modal, setModal] = useState<number | null>(null)


    const openModal = (num: number) => {
        if(modal === num) {
            return setModal(null)
        }
        setModal(num)
    }

    return (
        <header> 
            <div className='header__inner'>
            <div className="header_logo">
                <img src={logo} width='100px' />
            </div>
            <nav className="header_navigation">
                <Link to={'/'}>Главная</Link>
                <Link to={'delivery'}>Доставка</Link>
                <Link to={'about'}>О нас</Link>
                <Link to={'news'}>Новости</Link>
            </nav>
            <div className="header_contacts">
                <img src={iconPhone} alt="" />
                <p>+38 097 699 34 38</p>
            </div>
            <div className="header_user">
                <div onClick={()=>{openModal(1)}} className={'header_user_link ' + (modal === 1 ? 'active' : '')}>
                    <IconNotification color={modal === 1 ? 'white': 'black'} />
                </div>
                <Link to={'user/favorite'} state={1}>
                    <img className='header_user_link' src={iconFavorite} alt="" />
                </Link>
                <Link to={'user'}>
                    <img className='header_user_link' src={iconUser} alt="" />
                </Link>
                <div onClick={()=> {openModal(2)}} className={'header_user_link ' + (modal === 2 ? 'active' : '')} >
                    <p>Корзина</p>
                    <IconBasket color={modal === 2 ? 'white': 'black'} />
                </div>
            </div>
            </div>
            {
                (modal === 1 && <Notifications setModal={setModal} />)
            }
            {
                (modal === 2 && <Basket setModal={setModal} />)
            }
        </header>
    )
}