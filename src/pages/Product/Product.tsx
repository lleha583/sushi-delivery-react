//import { useParams } from "react-router-dom";
import './product.css';
import iconFaforite from '../../assets/icons/icon_favorite.svg'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/basketSlice';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interface/interface';
import PopupNotifications from '../../components/Notifications/PopupNotifications';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Product() {


    const dispath = useDispatch()
    const [product, setProduct] = useState<IProduct>({
        id: 0,
        title: '',
        image_url: '',
        body: '',
        type: '',
        price: 0,
        weight: 0
    })
    const [notification, setNotification] = useState<null | "basket" | "favorite">(null)
    const params = useParams()

    useEffect(()=> {
        const category = () => {
            if(params.category === 'sushi' || params.category === 'sauce' ||params.category === 'drink') {
                return 'food'
            } else {return 'set'}
        }
        axios.get(`http://127.0.0.1:8000/commands/product/${category()}?${category()}_id=${params.product}`)
        .then((res) => {setProduct({...res.data.detail})})
    }, [params])

    const setNewProduct = (item: IProduct | number, value: string) => {
        if(value === 'basket') { 
            dispath(addProduct(item)) 
            setNotification("basket")
        }
        else { 
            setNotification("favorite")
         }
        
        setTimeout(()=> {setNotification(null)}, 4000)
    }


    return (
        <>
            <section className="product">
                <div className="product_img">
                    <img src={`http://127.0.0.1:8000/commands/product/upload_image?${product.image_url}`} />
                </div>
                <div className="product_info">
                    <h1 className="product_info_title">{product.title}</h1>
                    <p className="product_info_body">состав:</p>
                    <p className="product_info_body">{product.body}</p>
                    <p className="product_info_weight">вес: {product.weight}г.</p>
                    <div className="product_info_btn">
                        <p className='product_info_price'>{product.price}р.</p>
                        <div>
                            <img onClick={()=>setNewProduct(product.id, 'favorite')} className="block_btn_favorite" src={iconFaforite} />
                            <button onClick={()=>{setNewProduct(product, 'basket')}} className='block_btn_add'>В козину</button>
                        </div>
                    </div>
                </div>
                {
                    (notification !== null && <PopupNotifications value={notification} />)
                }
            </section>
        </>
    )
}