import { Link } from "react-router-dom"
import './main.css'
import Catalog from "../../components/Catalog/Catalog"
import Delivery from "../../components/Delivery/Delivery"
import imgSets from '../../assets/img/catalog_sets.jpg'
import imgDrinks from '../../assets/img/catalog_drinks.jpg'
import Carusel from "../../components/Carusel/Carucel"


export default function Main() {

    return (
        <div className="main">
            <Carusel />
            <section className="main_category">
                <div className="main_category_path">
                    <Link to={"/catalog/set"} state={4}>
                        <div>
                            <img src={imgSets} />
                            <p>Сеты</p>
                        </div>
                    </Link>
                    <Link to={"/catalog/drink"} state={2}>
                        <div>
                            <img src={imgDrinks} />
                            <p>Напитки</p>
                        </div>
                    </Link>
                </div>
                <Link className="main_btn_catalog" to={'/catalog'}>Перейти в каталог</Link>
            </section>

            <Catalog type={"drink"} />
            <Catalog type={"sauce"} />
            <Delivery />
        </div>
    )
}