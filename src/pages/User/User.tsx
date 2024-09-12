import { Link, Outlet } from "react-router-dom";
import "./user.css";
import history from '../../assets/icons/icon_history.svg'
import favorite from '../../assets/icons/icon_favorite.svg'
import adress from '../../assets/icons/icon_map-point.svg'
import theme from '../../assets/icons/icon_theme.svg'
import { useState } from "react";
import iconUser from '../../assets/icons/icon_user.svg'

export default function User() {

    const userInfo = {
        name: 'lleha583',
        email: null,
        number: 1234567890
    }

    const [active, setActive] = useState<number | null>(null)

    const changeActive = (num: number): void => {
        setActive(num)
    }

    return (
        <section className="user">
            <nav className="user_nav">
                <Link to={"history"} onClick={()=> {changeActive(1)}} className={active === 1 ? 'user_active' : ''}>
                    <img src={history} />
                    <p>История заказов</p>
                </Link>
                <Link to={"favorite"} onClick={()=> {changeActive(2)}} className={active === 2 ? 'user_active' : ''}>
                    <img src={favorite} />
                    <p>Избранные товары</p>
                </Link>
                <Link to={"adress"} onClick={()=> {changeActive(3)}} className={active === 3 ? 'user_active' : ''}>
                    <img src={adress} />
                    <p>Адрес доставки</p>
                </Link>
                <Link to={"theme"} onClick={()=> {changeActive(4)}} className={active === 4 ? 'user_active' : ''}>
                    <img src={theme} />
                    <p>Тема сайта</p>
                </Link>
                <div className="user_status">
                    <img src={iconUser} />
                    <div>
                        <h3>{userInfo.name}</h3>
                        <p>{(userInfo.email && userInfo.email)}</p>
                        <span>+{userInfo.number}</span>
                    </div>
                </div>
            </nav>

            <div className="user_children">
                <Outlet />
            </div>
        </section>
    );
}
