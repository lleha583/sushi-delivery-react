import { useEffect, useState } from "react"
import './catalog.css'
import iconFaforite from '../../assets/icons/icon_favorite.svg'
import sushi from '../../data/sushi.json';
import drinks from '../../data/drinks.json';
import souce from '../../data/souce.json';
import sets from '../../data/sets.json';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/basketSlice";
import { IProduct } from "../../interface/interface";
import PopupNotifications from "../Notifications/PopupNotifications";
import { addFavorite } from "../../store/userSlice";


export default function Catalog({ value }: { value: string }) {

    const dispath = useDispatch()

    const [foodList, setFoodList] = useState<IProduct[]>([...sushi])
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

    useEffect(() => {
        switch (value) {
            case "sushi":
                setFoodList([...sushi])
                break;
            case "drinks":
                setFoodList([...drinks])
                break;
            case "souce":
                setFoodList([...souce])
                break;
            case "sets":
                setFoodList([...sets])
                break;
            }
    }, [value])

    return (
        <section>
            <h1 className="catalog_name">{value}</h1>
            <div className="catalog">
                {
                    foodList.map((item: IProduct) => {
                        return (
                            <div className="block" key={item.id} >
                                <Link to={`/catalog/${value}/${item.name}`}>
                                <div className="block_image">
                                    <img src={item.imageUrl} width='100%' />
                                </div>
                                <div className="block_info">
                                    <h1>{item.title}</h1>
                                    <p>{item.body}</p>
                                </div>
                                </Link>
                                <div className="block_btn">
                                    <h1>{item.price}p.</h1>
                                    <div>
                                    <img onClick={()=>setNewProduct(item.id, 'favorite')} className="block_btn_favorite" src={iconFaforite} />
                                    <button onClick={()=>{setNewProduct(item, 'basket')}} className='block_btn_add'>В козину</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                    (notification !== null && <PopupNotifications value={notification} />)
            }
        </section>
    )
}