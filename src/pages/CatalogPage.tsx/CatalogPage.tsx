import { useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Catalog from "../../components/Catalog/Catalog";

export default function CatalogPage() {


    const params = useParams()
    console.log(params)
    const value: string = params.category

    return (
        <>
            <Categories />
            <Catalog value={value} />
        </>
    )
}