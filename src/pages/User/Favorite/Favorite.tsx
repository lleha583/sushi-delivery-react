import imgFavorite from '../../../assets/img/user_favorite.png';
import './favorite.css';
import sets from '../../../data/sets.json'
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../interface/interface';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { addProduct } from '../../../store/basketSlice';
import PopupNotifications from '../../../components/Notifications/PopupNotifications';
import iconFavorite from '../../../assets/icons/icon_favorite.svg';
import { addFavorite } from '../../../store/userSlice';

export default function Favorite() {

    const favorite = useLocation().state
    const dispath = useDispatch()

    const [notification, setNotification] = useState<null | "basket" | "favorite">(null)

    const setNewProduct = (item: IProduct | number, value: string) => {
        if(value === 'basket') { 
            dispath(addProduct(item)) 
            setNotification("basket")
        }
        else { 
            dispath(addFavorite(item))
            setNotification("favorite")
         }
        
        setTimeout(()=> {setNotification(null)}, 4000)
    }


    return (
        <div className='user_favorite'>
            {
                (favorite.length === 0) ? (
                    <>
                        <img className='user_favorite_empty' src={imgFavorite} />
                        <div>
                            <h1>у вас нет сохраненных адресов</h1>
                            <p>сделайте свой первый заказ и адрес сохранится автоматически</p>
                        </div>
                    </>
                ) : (
                    favorite.map((item: IProduct) => {
                        return (
                            <div className="block" key={sets[0].id} >
                                <Link to={`/catalog/sets/${sets[0].name}`}>
                                <div className="block_image">
                                    <img src={item.imageUrl} width='100%' />
                                </div>
                                <div className="block_info">
                                    <h1>{sets[0].title}</h1>
                                    <p>{sets[0].body}</p>
                                </div>
                                </Link>
                                <div className="block_btn">
                                    <h1>{item.price}p.</h1>
                                    <div>
                                    <img 
                                        className="block_btn_favorite" src={iconFavorite} 
                                        onClick={()=>setNewProduct(sets[0].id, 'favorite')} 
                                    />
                                    <button 
                                        className='block_btn_add'
                                        onClick={()=>{setNewProduct(item, 'basket')}} 
                                    >В козину</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
            }
            {
                    (notification !== null && <PopupNotifications value={notification} />)
            }
        </div>
    )
}

