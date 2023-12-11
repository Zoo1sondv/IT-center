import { useMyContext } from '@/store/context/store';
import { ResetPasswordForm } from '@components/index';
import userApi from '@services/api/userApi';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const token = search.split('=')[1];
  const { enqueueSnackbar } = useSnackbar();
  const { setIsLoadingPage } = useMyContext();

  const handleSubmit = async (values) => {
    try {
      setIsLoadingPage(true);
      const response = await userApi.resetPassword({
        password: values.password,
        password_confirmation: values.passwordConfirm,
        token: token,
      });
      if (response) {
        navigate('/auth/login');
        enqueueSnackbar('Thay đổi mật khẩu thành công 🎉🎉🎉', {
          variant: 'success',
        });
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    } finally {
      setIsLoadingPage(false);
    }
  };

  return <ResetPasswordForm onSubmit={handleSubmit} />;
}

export default ResetPassword;
