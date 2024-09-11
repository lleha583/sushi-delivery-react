import Catalog from "../../components/Catalog/Catalog"
import Categories from "../../components/Categories/Categories"
import Delivery from "../../components/Delivery/Delivery"

export default function Main() {


    return (
        <>
            <Categories />
            <Catalog value={"sushi"} />
            <Catalog value={"drinks"} />
            <Catalog value={"souce"} />
            <Catalog value={"sets"} />
            <Delivery />
        </>
    )    
}