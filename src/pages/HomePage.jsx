import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuth, email } = useAuth();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth, navigate]);

    return (
        <div>
            <h1>Welkome</h1>

            <button onClick={() => dispatch(removeUser())}>
                log out from {email}
            </button>
        </div>
    );
}

export default HomePage;
