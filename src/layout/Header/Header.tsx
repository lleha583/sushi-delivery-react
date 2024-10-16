import logo from '../../assets/img/ninjasush-logo.png'
import iconPhone from '../../assets/icons/icon_phone.svg'
import iconUser from '../../assets/icons/icon_user.svg'
import { IconNotification } from '../../assets/icons/IconNotification'
import { IconBasket } from '../../assets/icons/IconBasket'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Basket from '../../components/Basket/Basket'
import Modal from '../../components/Modal/Modal'
import Notifications from '../../components/Notifications/Notifications'
import { useSelector } from 'react-redux'
import { IState } from '../../interface/interface'
import Auth from '../../components/Auth/Auth'

export default function Header() {

    const user = useSelector((state: IState) => {return state.user})

    const [modal, setModal] = useState<number | null>(null)
    const navigate = useNavigate()

    const checkAuth = () => {
        if(user.status === true) {
            navigate('user')
        } else {
            setModal(3)
        }
    }

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
                <Link to={'/'}>
                    <img src={logo} width='100px' />
                </Link>
            </div>
            <nav className="header_navigation">
                <Link to={'/'}>Главная</Link>
                <Link to={'delivery'}>Доставка</Link>
                <Link to={'news'}>Новости</Link>
            </nav>
            <div className="header_contacts">
                <img src={iconPhone} alt="" />
                <p>+12 345 67 89</p>
            </div>
            <div className="header_user">
                <div 
                    onClick={()=>{openModal(1)}} 
                    className={'header_user_link ' + (modal === 1 ? 'active' : '')}
                >
                    <IconNotification color={modal === 1 ? 'white': 'black'} />
                </div>
                <div onClick={checkAuth}>
                    <img className='header_user_link' src={iconUser} alt="" />
                </div>
                <div onClick={()=> {openModal(2)}} className={'header_user_link ' + (modal === 2 ? 'active' : '')} >
                    <p>Корзина</p>
                    <IconBasket color={modal === 2 ? 'white': 'black'} />
                </div>
            </div>
            </div>
            {
                (modal !== null && 
                <Modal setModal={setModal}>
                    {(modal === 1 && <Notifications />)}
                    {(modal === 2 && <Basket setModal={setModal} />)}
                    {(modal === 3 && <Auth />)}
                </Modal>)
            }
        </header>
    )
}