import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import CatalogPage from "../pages/CatalogPage.tsx/CatalogPage";

export const route  = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/:category',
                element: <CatalogPage />
            }
        ]
    }
])