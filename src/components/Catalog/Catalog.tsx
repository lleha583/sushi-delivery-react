import { useEffect, useState } from "react"
import './catalog.css'
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/basketSlice";
import { IProduct } from "../../interface/interface";
import PopupNotifications from "../Notifications/PopupNotifications";
import { CatalogBlock } from "./CatalogBlock";
import axios from "axios";

export default function Catalog({ type, page = 1 }: { type: string, page?:number }) {

    const dispath = useDispatch()

    const [foodList, setFoodList] = useState<IProduct[]>([])
    const [notification, setNotification] = useState<null | "basket" | "favorite">(null)
    
    const setNewProduct = (item: IProduct | number) => {

        dispath(addProduct(item))
        setNotification("basket")

        setTimeout(() => { setNotification(null) }, 4000)
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/commands/product/foods/${page}?type_food=${type}`)
            .then((res)=>{setFoodList([...res.data.detail])})
    }, [type, page])

    return (
        <section>
            <h1 className="catalog_name">{type}</h1>
            <div className="catalog">
                {
                    foodList.map((item: IProduct) => {
                        return (
                            <div className="block" key={item.id}>
                                <CatalogBlock item={item} setNewProduct={setNewProduct} />
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