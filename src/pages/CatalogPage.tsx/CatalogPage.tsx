import { Outlet, useLocation } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

export default function CatalogPage() {

    const location = useLocation()
    console.log(location)
    if (location.pathname !== "/category") {
        return (
            <>
                <Categories />
                <Outlet />
            </>
        )
    }
    return (
        <>
            <h1>category</h1>
        </>
    )
}