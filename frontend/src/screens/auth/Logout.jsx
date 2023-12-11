import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './userSlice';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const action = logout();
    dispatch(action);
    navigate('/auth/login');
  }, [dispatch, navigate]);

  return <></>;
}

export default Logout;
