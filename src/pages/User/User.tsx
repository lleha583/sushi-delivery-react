import { Link, Outlet } from "react-router-dom";
import "./user.css";
import history from '../../assets/icons/icon_history.svg'
import favorite from '../../assets/icons/icon_favorite.svg'
import adress from '../../assets/icons/icon_map-point.svg'
import { useState } from "react";
import iconUser from '../../assets/icons/icon_user.svg'
import { useSelector } from "react-redux";
import { IState } from "../../interface/interface";
import iconPen from '../../assets/icons/icon_pen.svg'
import UserChangeInfo from "../../components/Modal/UserChangeInfo";

export default function User() {

    const user = useSelector((state: IState) => {return state.user})

    const [active, setActive] = useState<number | null>(null)
    const [modal, setModal] = useState<null | number>(null)


    const changeActive = (num: number): void => {
        setActive(num)
    }
    
    return (
        <section className="user">
            <nav className="user_nav">
                <Link 
                    to={"history"} 
                    onClick={()=>{changeActive(0)}} 
                    className={active === 0 ? 'user_active' : ''}
                >
                    <img className="" src={history} />
                    <p>История заказов</p>
                </Link>
                <Link 
                    to={"favorite"} 
                    onClick={()=>{changeActive(1)}} 
                    className={active === 1 ? 'user_active' : ''}
                >
                    <img src={favorite} />
                    <p>Избранные товары</p>
                </Link>
                <Link 
                    to={"adress"} 
                    onClick={()=>{changeActive(2)}} 
                    className={active === 2 ? 'user_active' : ''}
                    state={user.data.addresses}
                >
                    <img src={adress} />
                    <p>Адрес доставки</p>
                </Link>
                <div className="user_status">
                    <div className="user_status_info">

                    <img 
                        className="user_status_info_icon" 
                        src={iconUser}
                        alt="user icon"
                    />
                    <div>
                        <h3>{user.data.username}</h3>
                        <p>{user.data.email}</p>
                        <span>+{user.data.number}</span>
                    </div>
                    </div>
                    <img 
                        onClick={()=>{setModal(1)}} 
                        className="user_status_change" 
                        src={iconPen} 
                        alt="change info" 
                    />
                </div>
            </nav>

            <div className="user_children">
                <Outlet />
            </div>
            {
                (modal && <UserChangeInfo setModal={setModal} user={user} />)
            }
        </section>
    );
}
