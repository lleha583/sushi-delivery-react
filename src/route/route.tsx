import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";
import CatalogPage from "../pages/CatalogPage.tsx/CatalogPage";
import News from "../pages/News/News";
import DeliveryPage from "../pages/Delivery/DeliveryPage";
import About from "../pages/About/About";
import User from "../pages/User/User";
import Favorite from "../pages/User/Favorite/Favorite";
import Adress from "../pages/User/Adress/Adress";
import History from "../pages/User/History/History";
import Theme from "../pages/User/Theme/Theme";
import CatalogList from "../pages/CatalogPage.tsx/CatalogList/CatalogList";

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
                path: 'category',
                element: <CatalogPage />,
                children: [
                    {
                        path: ':category',
                        element: <CatalogList />
                    }
                ]
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