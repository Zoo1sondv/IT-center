import { HeaderHomePage, LoadingPage } from '@components/index';
import { useMyContext } from '@store/context/store';
import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  const { isLoadingPage } = useMyContext();

  return (
    <div className="vh-100">
      {isLoadingPage && <LoadingPage />}
      <div>
        <HeaderHomePage className={'bg-info py-2'} />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
