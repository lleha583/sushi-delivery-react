import { useEffect, useState } from "react"
import './catalog.css'
import { useDispatch } from "react-redux";
import { addBakset } from "../../store/basketSlice";
import { IProduct } from "../../interface/interface";
import PopupNotifications from "../Modal/PopupNotifications";
import { CatalogBlock } from "./CatalogBlock";
import axios from "axios";
import { addFavorite } from "../../services/user/addFavorite";

export default function Catalog({ type, page = 1 }: { type: string, page?:number }) {

    const dispath = useDispatch()

    const [foodList, setFoodList] = useState<IProduct[]>([])
    const [notification, setNotification] = useState<boolean>(false)

    const changeFavorite = (item: IProduct) => {
        addFavorite(item)
}
    
    const setNewProduct = (item: IProduct) => {

        dispath(addBakset(item))
        setNotification(true)

        setTimeout(() => { setNotification(false) }, 4000)
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
                                <CatalogBlock item={item} setNewProduct={setNewProduct} changeFavorite={changeFavorite} />
                           </div>
                        )
                    })
                }
            </div>
            {
                    (notification && <PopupNotifications />)
            }
        </section>
    )
}