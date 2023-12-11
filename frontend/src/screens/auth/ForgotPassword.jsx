import { useMyContext } from '@/store/context/store';
import { ForgotPasswordForm } from '@components/index';
import userApi from '@services/api/userApi';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setIsLoadingPage } = useMyContext();

  const handleSubmit = async (values) => {
    try {
      setIsLoadingPage(true);
      const response = await userApi.forgotPassword(values);
      if (response) {
        navigate('/auth/login');
        enqueueSnackbar(response.message, { variant: 'success' });
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    } finally {
      setIsLoadingPage(false);
    }
  };

  return <ForgotPasswordForm onSubmit={handleSubmit} />;
}

export default ForgotPassword;
