import { useParams } from "react-router-dom";
import Catalog from "../../../components/Catalog/Catalog";

export default function CatalogList() {
    
    const params = useParams()
    const value: any = params.category

    
    
    return (
        <>
            <Catalog value={value}/>
        </>
    )
}