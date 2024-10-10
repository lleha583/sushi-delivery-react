import imgFavorite from '../../../assets/img/user_favorite.png';
import './favorite.css';
import { IProduct } from '../../../interface/interface';
import { useEffect, useState } from 'react';
import { addProduct } from '../../../store/basketSlice';
import PopupNotifications from '../../../components/Notifications/PopupNotifications';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CatalogBlock } from '../../../components/Catalog/CatalogBlock';

export default function Favorite() {


    const [favorite, setFavorite] = useState<IProduct[]>([])
    const [notification, setNotification] = useState<null | "basket" | "favorite">(null)

    const dispath = useDispatch()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/commands/favoritelist/show', { withCredentials: true })
            .then((res) => { console.log(res); return setFavorite([...res.data.detail])})
            .catch((error) => { console.log(error); })
    }, [])


    const setNewProduct = (item: IProduct | number) => {

        dispath(addProduct(item))
        setNotification("basket")

        setTimeout(() => { setNotification(null) }, 4000)
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
                            <div className='block' key={item.id}>
                                <CatalogBlock item={item} setNewProduct={setNewProduct} />
                            </div>
                        )
                    })
                )
            }
            {
                (notification !== null && <PopupNotifications value={notification} />)
            }
        </div>
    )
}

