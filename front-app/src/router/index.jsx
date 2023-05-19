import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";



import Home from "../pages/Home/Home";
import Hys from "../pages/Hys/Hys"
import MedicalService from "../pages/MedicalService/MedicalService"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Staff from "../pages/Staff/Staff";
import StaffDetail from "../pages/StaffDetail/StaffDetail"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,  //quiere decir que home es la pagina principal
                element: <Home />,
            },
            {
                path: '/hys',
                element: <Hys />
            },
            {
                path: '/medicalservice',
                element: <MedicalService />
            },
            {
                path: '/staff',
                element: <Staff />
            },
            {
                path: '/staff/:id',
                element: <StaffDetail />
            },
        ]
    },

]);