import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutPublic = () => {
    const status = parseInt(localStorage.getItem('Status'));
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 1) {
            navigate('/home');
        }
    }, [status, navigate]);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayoutPublic;
