import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main/Main";

export const route  = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />
            }
        ]
    }
])