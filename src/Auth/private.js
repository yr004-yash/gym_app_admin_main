import React from 'react';
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');

    if (!token && !name && !id) {
        return navigate('/');
    } else {
        return children
    }
}

export default PrivateRoute;