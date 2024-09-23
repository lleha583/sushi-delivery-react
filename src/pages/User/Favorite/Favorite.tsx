import imgFavorite from '../../../assets/img/user_favorite.png';
import './favorite.css';
import sets from '../../../data/sets.json'
import { useDispatch, useSelector } from 'react-redux';
import { IBasket, IProduct, IUser } from '../../../interface/interface';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addProduct } from '../../../store/basketSlice';
import PopupNotifications from '../../../components/Notifications/PopupNotifications';
import iconFavorite from '../../../assets/icons/icon_favorite.svg';

export default function Favorite() {

    const favorite = useSelector((state: { user: IUser, basket: IBasket }) => { return state.user.favorite })
    const dispath = useDispatch()

    const [notification, setNotification] = useState(false)

    const setNewProduct = (item: IProduct) => {

        dispath(addProduct(item))

        setNotification(true)
        setTimeout(()=> {setNotification(false)}, 4000)
    }

    console.log(favorite)

    return (
        <div className='user_favorite'>
            {
                (favorite.length === 0) ? (
                    <>
                        <img className='user_favorite_empty' src={imgFavorite} alt="" />
                        <div>
                            <h1>у вас нет сохраненных адресов</h1>
                            <p>сделайте свой первый заказ и адрес сохранится автоматически</p>
                        </div>
                    </>
                ) : (
                    favorite.map((item)=> {
                        return (
                            <div className="block" key={item} >
                                <Link to={`/catalog/${sets[item].title}/${sets[item].name}`}>
                                <div className="block_image">
                                    <img src={sets[item].imageUrl} width='100%' />
                                </div>
                                <div className="block_info">
                                    <h1>{sets[item].title}</h1>
                                    <p>{sets[item].body}</p>
                                </div>
                                </Link>
                                <div className="block_btn">
                                    <h1>{sets[item].price}p.</h1>
                                    <div>
                                        <img className="block_btn_favorite" src={iconFavorite} />
                                        <button className="block_btn_add" onClick={()=> {setNewProduct(sets[item])}}>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
            {
                (notification && <PopupNotifications status={'basket'}/>)
            }
        </div>
    )
}

