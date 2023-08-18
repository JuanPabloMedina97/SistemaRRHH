import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const LayoutPrivate = () => {
    const status = parseInt(localStorage.getItem('Status'));
    const navigate = useNavigate();

    useEffect(() => {
        if (status === null || status !== 1) {
            navigate('/');
        }
    }, [status, navigate]);
    console.log(status);

    return (
        <>
            <Outlet />
        </>
    )
}

export default LayoutPrivate;
