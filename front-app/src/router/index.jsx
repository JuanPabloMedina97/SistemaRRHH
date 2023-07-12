import { createBrowserRouter} from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";



import Home from "../pages/Home/Home";
import Hys from "../pages/Hys/Hys"
import MedicalService from "../pages/MedicalService/MedicalService"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Staff from "../pages/Staff/Staff";
import StaffParams from "../pages/StaffDetail/StaffParams";


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
                element: <Home />,
            },
            {
                path: "/hys",
                element: <Hys />,
            },
            {
                path: "/medicalservice",
                element: <MedicalService />,
            },
            {
                path: "/user",
                element: <Staff />,
            },
            {
                path: "/user/:id",
                element: <StaffParams />,
            },
        ],
    },

]);

export default router;