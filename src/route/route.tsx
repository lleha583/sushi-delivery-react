import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import CatalogPage from "../pages/CatalogPage.tsx/CatalogPage";
import News from "../pages/News/News";
import DeliveryPage from "../pages/Delivery/DeliveryPage";
import About from "../pages/About/About";

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
                path: ':category',
                element: <CatalogPage />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'delivery',
                element: <DeliveryPage />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])