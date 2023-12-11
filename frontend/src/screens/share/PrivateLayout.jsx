import {
  Footer,
  HeaderHomePage,
  LoadingPage,
  Sidebar,
} from '@components/index';
import { useMyContext } from '@store/context/store';
import React from 'react';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const { isLoadingPage, isShowSidebar } = useMyContext();

  return (
    <div className="vh-100">
      {isLoadingPage && <LoadingPage />}
      <div className="min-vh-100">
        <HeaderHomePage
          className={'position-sticky top-0 bg-dark py-3 z-index-1'}
        />
        <div className="d-flex overflow-auto">
          {isShowSidebar && <Sidebar />}
          <div className="d-flex flex-fill flex-column">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateLayout;
