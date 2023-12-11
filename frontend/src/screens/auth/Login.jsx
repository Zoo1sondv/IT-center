import { LoginForm } from '@components/index';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from '@services/auth/userService';
import { useMyContext } from '@store/context/store';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setIsLoadingPage } = useMyContext();

  const handleSubmit = async (values) => {
    try {
      setIsLoadingPage(true);
      const action = login(values);
      const resultAction = await dispatch(action);
      if (unwrapResult(resultAction)) {
        navigate('/');
        enqueueSnackbar('Đăng nhập thành công 🎉🎉🎉', { variant: 'success' });
      }
    } catch (error) {
      enqueueSnackbar('Email hoặc mật khẩu không đúng!', { variant: 'error' });
    } finally {
      setIsLoadingPage(false);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
