import { RegisterForm } from '@components/index';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '@services/auth/userService';
import { useMyContext } from '@store/context/store';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setIsLoadingPage } = useMyContext();

  const handleSubmit = async (values) => {
    try {
      setIsLoadingPage(true);
      const action = register({
        name: values.username,
        email: values.email,
        password: values.password,
        password_confirmation: values.passwordConfirm,
      });
      const resultAction = await dispatch(action);
      if (unwrapResult(resultAction)) {
        navigate('/');
        enqueueSnackbar('Đăng ký thành công 🎉🎉🎉', { variant: 'success' });
      }
    } catch (error) {
      enqueueSnackbar('Email đã được sử dụng!', { variant: 'error' });
    } finally {
      setIsLoadingPage(false);
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
