//import { useParams } from "react-router-dom";
import './product.css';
import sushi from '../../data/sushi.json';
import iconFaforite from '../../assets/icons/icon_favorite.svg'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/basketSlice';
import { useState } from 'react';
import { IProduct } from '../../interface/interface';
import PopupNotifications from '../../components/Notifications/PopupNotifications';


export default function Product() {

    const dispath = useDispatch()
    const [product, setProduct] = useState<IProduct>({...sushi[0]})
    const [notification, setNotification] = useState<null | "basket" | "favorite">(null)

    const setNewProduct = (item: IProduct) => {

        dispath(addProduct(item))

        setNotification("basket")
        setTimeout(()=> {setNotification(null)}, 4000)
    }

    return (
        <>
            <section className="product">
                <div className="product_img">
                    <img src={sushi[1].imageUrl} />
                </div>
                <div className="product_info">
                    <h1 className="product_info_title">{product.title}</h1>
                    <p className="product_info_body">состав:</p>
                    <p className="product_info_body">{product.body}</p>
                    <p className="product_info_weight">вес:</p>
                    <p className="product_info_weight">{product.weight}г.</p>
                    <div className="product_info_btn">
                        <p className='product_info_price'>{product.price}р.</p>
                        <div>
                            <img className="block_btn_favorite" src={iconFaforite} />
                            <button onClick={()=>{setNewProduct(product)}} className='block_btn_add'>В козину</button>
                        </div>
                    </div>
                </div>
                {
                    (notification && <PopupNotifications status={'basket'} />)
                }
            </section>
        </>
    )
}