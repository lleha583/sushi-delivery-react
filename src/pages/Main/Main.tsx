import { Link } from "react-router-dom"
import './main.css'
import Catalog from "../../components/Catalog/Catalog"
import Delivery from "../../components/Delivery/Delivery"
import imgSets from '../../assets/img/catalog_sets.jpg'
import imgDrinks from '../../assets/img/catalog_drinks.jpg'
import Carusel from "../../components/Carusel/Carucel"
import { useEffect } from "react"
import { checkAuth } from "../../store/userSlice"
import { store } from "../../store"

export default function Main() {

    useEffect(() => {
        store.dispatch(checkAuth())
    }, [])


    return (
        <div className="main">
            <Carusel />
            <section className="main_category">
                <div className="main_category_path">
                    <Link to={"/catalog/sets"} state={4}>
                        <div>
                            <img src={imgSets} />
                            <p>Сеты</p>
                        </div>
                    </Link>
                    <Link to={"/catalog/drinks"} state={2}>
                        <div>
                            <img src={imgDrinks} />
                            <p>Напитки</p>
                        </div>
                    </Link>
                </div>
                <Link className="main_btn_catalog" to={'/catalog'}>Перейти в каталог</Link>
            </section>

            <Catalog value={"drinks"} />
            <Catalog value={"sets"} />
            <Delivery />
        </div>
    )
}