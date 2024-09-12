import { useLocation, useParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import Categories from "../../components/Categories/Categories";

export default function CatalogList() {

    const params = useParams()
    const category = useLocation().state
    const value = params.category!;
    
    return (
        <>
            <Categories category={category} />
            <Catalog value={value} />
        </>
    )

}