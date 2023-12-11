import {
  TabsPage,
  TitlePages,
  UserEditInfo,
  UserEditPassword,
  UserInfoAccount,
  UserInfoPage,
  UserQuestionPage,
  UserDocumentPage,
  UsersPage,
} from '@components/index';
import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

export const LayoutInfoUser = () => {
  const contents = {
    title: 'Thông tin giới thiệu',
    description: '',
  };
  const menuTabs = useMemo(
    () => [
      { label: 'Giới thiệu', link: '/users/id' },
      { label: 'Câu hỏi', link: '/users/qs' },
      { label: 'Bài viết', link: '/users/doc' },
      { label: 'Cài đặt', link: '/users/edit' },
    ],
    [],
  );

  return (
    <>
      <TitlePages contents={contents} isShowAction={false} />
      <TabsPage menuTabs={menuTabs} className="m-0 justify-content-center" />
    </>
  );
};

function UsersWrapper() {
  return (
    <div className="d-flex flex-column flex-fill x-3 min-vh-100">
      <Routes>
        <Route path="" element={<UsersPage />} />
        <Route>
          <Route
            path="/:id"
            element={
              <>
                <LayoutInfoUser />
                <UserInfoPage />
              </>
            }
          />
          <Route
            path="/qs"
            element={
              <>
                <LayoutInfoUser />
                <UserQuestionPage />
              </>
            }
          />
          <Route
            path="/doc"
            element={
              <>
                <LayoutInfoUser />
                <UserDocumentPage />
              </>
            }
          />
          <Route
            path="/edit/info"
            element={
              <>
                <LayoutInfoUser />
                <UserEditInfo />
              </>
            }
          />
          <Route
            path="/edit/password"
            element={
              <>
                <LayoutInfoUser />
                <UserEditPassword />
              </>
            }
          />
          <Route
            path="/edit"
            element={
              <>
                <LayoutInfoUser />
                <UserInfoAccount />
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default UsersWrapper;
