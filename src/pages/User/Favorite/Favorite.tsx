import imgFavorite from '../../../assets/img/user_favorite.png';
import './favorite.css';
import { IProduct } from '../../../interface/interface';
import { useEffect, useState } from 'react';
import { addBakset } from '../../../store/basketSlice';
import PopupNotifications from '../../../components/Modal/PopupNotifications';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CatalogBlock } from '../../../components/Catalog/CatalogBlock';
import { deleteFavorite } from '../../../services/deleteFavorite';

export default function Favorite() {

    const [favorite, setFavorite] = useState<IProduct[]>([])
    const [notification, setNotification] = useState<boolean>(false)

    const dispath = useDispatch()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/commands/favoritelist/show', { withCredentials: true })
            .then((res) => { console.log(res); return setFavorite([...res.data.detail])})
            .catch((error) => { console.log(error); })
    }, [favorite])

    const changeFavorite = (item: IProduct) => {
            deleteFavorite(item)
    }

    const setNewProduct = (item: IProduct) => {

        dispath(addBakset(item))
        setNotification(true)

        setTimeout(() => { setNotification(false) }, 4000)
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
                                <CatalogBlock item={item} setNewProduct={setNewProduct} changeFavorite={changeFavorite} />
                            </div>
                        )
                    })
                )
            }
            {
                (notification && <PopupNotifications />)
            }
        </div>
    )
}

