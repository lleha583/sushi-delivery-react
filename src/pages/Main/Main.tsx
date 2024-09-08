import Catalog from "../../components/Catalog/Catalog"
import Categories from "../../components/Categories/Categories"
import Delivery from "../../components/Delivery/Delivery"

export default function Main() {


    return (
        <>
            <Categories />
            <Catalog value={"суши и роллы"} />
            <Catalog value={"напитки"} />
            <Catalog value={"соусы"} />
            <Catalog value={"сеты"} />
            <Delivery />
        </>
    )    
}