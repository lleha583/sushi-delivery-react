import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./user.css";
import history from '../../assets/icons/icon_history.svg'
import favorite from '../../assets/icons/icon_favorite.svg'
import adress from '../../assets/icons/icon_map-point.svg'
import theme from '../../assets/icons/icon_theme.svg'
import { useEffect, useState } from "react";
import iconUser from '../../assets/icons/icon_user.svg'
import { useSelector } from "react-redux";
import { IState } from "../../interface/interface";

export default function User() {

    const navigate = useNavigate()

    const location = useLocation()
    const user = useSelector((state: IState) => {return state.user})
    useLocation().state = user.favorite
    
    const [active, setActive] = useState<number | null>(null)

    useEffect(()=> {
        if (user.status === false) 
        if(location.state !== null) return setActive(location.state)
    }, [])

    const changeActive = (num: number): void => {
        setActive(num)
    }

    return (
        <section className="user">
            <nav className="user_nav">
                <Link to={"history"} onClick={()=> {changeActive(0)}} className={active === 0 ? 'user_active' : ''}>
                    <img src={history} />
                    <p>История заказов</p>
                </Link>
                <Link to={"favorite"} state={user.favorite} onClick={()=> {changeActive(1)}} className={active === 1 ? 'user_active' : ''}>
                    <img src={favorite} />
                    <p>Избранные товары</p>
                </Link>
                <Link to={"adress"} onClick={()=> {changeActive(2)}} className={active === 2 ? 'user_active' : ''}>
                    <img src={adress} />
                    <p>Адрес доставки</p>
                </Link>
                <Link to={"theme"} onClick={()=> {changeActive(3)}} className={active === 3 ? 'user_active' : ''}>
                    <img src={theme} />
                    <p>Тема сайта</p>
                </Link>
                <div className="user_status">
                    <img src={iconUser} />
                    <div>
                        <h3>{user.name}</h3>
                        <p>{(user.email && user.email)}</p>
                        <span>+{user.number}</span>
                    </div>
                </div>
            </nav>

            <div className="user_children">
                <Outlet />
            </div>
        </section>
    );
}
