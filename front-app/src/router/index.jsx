import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import LayoutPrivate from "../layout/LayoutPrivate";


import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import Hys from "../pages/Hys/Hys"
import MedicalService from "../pages/MedicalService/MedicalService"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Staff from "../pages/Staff/Staff";
import StaffParams from "../pages/StaffDetail/StaffParams";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";


// const isAuthenticated = () => {
//     // Lógica para verificar si el usuario está autenticado
//     // Devuelve true si el usuario está autenticado, false en caso contrario
//     // Puedes implementar tu propia lógica de autenticación aquí
//     return true /* true si el usuario está autenticado, false en caso contrario */;
// };


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <Login />, //aqui iria el login
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forgotpassword",
                element: <ForgotPassword />
            },
            {
                path: "/home",
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: "/home/user",
                        element: <Staff />,
                    },
                    {
                        path: "/home/user/:id",
                        element: <StaffParams />,
                    },
                ]
            }



        ],
    },

]);

export default router;