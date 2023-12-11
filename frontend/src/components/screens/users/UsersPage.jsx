import {
  MenuPages,
  SearchPages,
  TabsPage,
  TitlePages,
} from '@components/index';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CardUser from './CardUser';
import { useMyContext } from '@store/context/store';
import userApi from '@services/api/userApi';

function UsersPage() {
  const { setIsLoadingPage } = useMyContext();
  const [usersData, setUsersData] = useState([]);
  const [valueSearch, setValueSearch] = useState();

  const contents = {
    title: 'Thành viên',
    description: 'Tham gia cùng chúng tôi!',
  };

  const [menu, setMenu] = useState({
    link1: '/users',
    name1: 'Thành viên',
    name2: '',
  });

  const menuTabs = useMemo(
    () => [
      { label: 'Tất cả', link: '/users?tab=user' },
      { label: 'Quản trị viên', link: '/users?tab=admin' },
    ],
    [],
  );

  const handleClickRoot = () => {
    setMenu({ ...menu, name2: '' });
  };

  const handleSearch = useCallback((value) => {
    setValueSearch(value);
  }, []);

  const getAllUsers = useCallback(async () => {
    try {
      setIsLoadingPage(true);
      const usersData = await userApi.getAllUsers({
        order_by_created_at: 'desc',
        name: valueSearch,
      });
      setUsersData(usersData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingPage(false);
    }
  }, [setIsLoadingPage, valueSearch]);

  useEffect(() => {
    getAllUsers();

    return () => {
      setUsersData([]);
    };
  }, [getAllUsers]);

  return (
    <>
      <TitlePages contents={contents} isShowAction={false} />
      <div className="mx-4 mt-4">
        <MenuPages menu={menu} onClick={handleClickRoot} />
        <SearchPages
          className={'mt-4'}
          onSubmit={handleSearch}
          placeHolder="Tìm thành viên..."
        />
        <TabsPage menuTabs={menuTabs} />

        <CardUser data={usersData} />
      </div>
    </>
  );
}

export default UsersPage;
