import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import CatalogPage from "../pages/CatalogPage.tsx/CatalogPage";
import DeliveryPage from "../pages/Delivery/DeliveryPage";;
import User from "../pages/User/User";
import Favorite from "../pages/User/Favorite/Favorite";
import Adress from "../pages/User/Adress/Adress";
import History from "../pages/User/History/History";
import Theme from "../pages/User/Theme/Theme";
import CatalogList from "../pages/CatalogList/CatalogList";
import Product from "../pages/Product/Product";
import Checkout from "../pages/Checkout/Checkout";
import { lazy, Suspense } from "react";

const News = lazy(() => {return import("../pages/News/News");})
const About = lazy(() => {return import("../pages/About/About");})

export const route  = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'catalog',
                element: <CatalogPage />,
            },
            {
                path: 'catalog/:category',
                element: <CatalogList />
            },
            {
                path: 'catalog/:category/:product',
                element: <Product />
            },
            {
                path: 'checkout',
                element: <Checkout />
            },
            {
                path: 'news',
                element: <Suspense><News /></Suspense>,
            },
            {
                path: 'delivery',
                element: <DeliveryPage />
            },
            {
                path: 'about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: 'user',
                element: <User />,
                children: [
                    {
                        path: 'favorite',
                        element: <Favorite />
                    },
                    {
                        path: 'adress',
                        element: <Adress />
                    },
                    {
                        path: 'History',
                        element: <History />
                    },
                    {
                        path: 'theme',
                        element: <Theme />
                    }
                ]
            }
        ]
    }
])