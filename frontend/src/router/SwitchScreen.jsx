import ResetPassword from '@screens/auth/ResetPassword';
import {
  AboutWrapper,
  AuthLayout,
  DocumentWrapper,
  ForgotPassword,
  HomePage,
  LearnWrapper,
  Login,
  Logout,
  NotFound,
  PrivateLayout,
  Register,
  TagsWrapper,
  UsersWrapper,
} from '@screens/index';
import QuestionWrapper from '@screens/question/QuestionWrapper';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

function SwitchScreen() {
  const isLoggedIn = !_.isEmpty(useSelector((state) => state.user.current));

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {isLoggedIn ? (
        <Route path="" element={<PrivateLayout />}>
          <Route path="/learn/*" element={<LearnWrapper />} />
          <Route path="/question/*" element={<QuestionWrapper />} />
          <Route path="/documentation/*" element={<DocumentWrapper />} />
          <Route path="/tags/*" element={<TagsWrapper />} />
          <Route path="/users/*" element={<UsersWrapper />} />
          <Route path="/about/*" element={<AboutWrapper />} />
          <Route path="/auth/*" element={<Logout />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      ) : (
        <Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route index element={<Navigate to="/auth/login" />} />
          </Route>
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Route>
      )}
    </Routes>
  );
}

export default SwitchScreen;
