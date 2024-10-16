//import { useParams } from "react-router-dom";
import './product.css';
import iconFaforite from '../../assets/icons/icon_favorite.svg'
import { useDispatch } from 'react-redux';
import { addBakset } from '../../store/basketSlice';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interface/interface';
import PopupNotifications from '../../components/Modal/PopupNotifications';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product() {

    const params = useParams()
    const dispath = useDispatch()
    
    const [notification, setNotification] = useState<boolean>(false)

    const [product, setProduct] = useState<IProduct>({
        id: 0,
        title: '',
        image_url: '',
        body: '',
        type: '',
        price: 0,
        weight: 0
    })
    const [productSet, setProductSet] = useState<IProduct[]>([])
    console.log(params.category);

    useEffect(()=> {
        const category = (params.category === 'set') ? 'set' : 'food';
        console.log(category);
        
        axios.get(`http://127.0.0.1:8000/commands/product/${category}?${category}_id=${params.product}`)
        .then((res) => {
            console.log(res);
            setProduct({...res.data.detail})
            if(category === 'set') {
                res.data.detail.food_in_set.map((item: number) => {
                    axios.get(`http://127.0.0.1:8000/commands/product/food?food_id=${item}`)
                        .then((value) => {
                            setProductSet((prev) => {return [...prev, value.data.detail ]})
                        })
                })
            }
        })
    }, [params])

    const setNewProduct = (item: IProduct) => {

        dispath(addBakset(item))
        setNotification(true)

        setTimeout(() => { setNotification(false) }, 4000)
    }

    return (
        <>
            <section className="product">
                <div className="product_img">
                    <img src={`http://127.0.0.1:8000/commands/product/upload_image?${product.image_url}`} />
                </div>
                <div className="product_info">
                    <h1 className="product_info_title">{product.title}</h1>
                    <p className="product_info_body" color='red'>состав: </p>
                    {
                        (productSet.length !== 0 &&
                            productSet.map((item)=> {
                                return (
                                    <Link to={`/catalog/${(item.type !== undefined) ? item.type : 'set'}/${item.id}`}>
                                        <p className="product_info_body">{item.title},</p>
                                    </Link>
                                )
                            })
                        )
                    }
                    <p className="product_info_body">{product.body}</p>
                    <p className="product_info_weight">вес: {product.weight}г.</p>
                    <div className="product_info_btn">
                        <p className='product_info_price'>{product.price}р.</p>
                        <div>
                            <img 
                                onClick={()=>setNewProduct(product)} 
                                className="block_btn_favorite" 
                                src={iconFaforite} 
                            />
                            <button 
                                onClick={()=>{setNewProduct(product)}} 
                                className='block_btn_add'
                            >В козину</button>
                        </div>
                    </div>
                </div>
                {
                    (notification && <PopupNotifications />)
                }
            </section>
        </>
    )
}