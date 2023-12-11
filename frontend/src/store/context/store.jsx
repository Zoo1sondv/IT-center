import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import userApi from '@services/api/userApi';

export const Store = createContext();

export const useMyContext = () => useContext(Store);

export const ContextProvider = ({ children }) => {
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [resetInfo, setResetInfo] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [avatar, setAvatar] = useState();

  const getAvatar = useCallback((avatarName) => {
    try {
      const data = userApi.getAvatar({
        avatar: avatarName,
      });
      setAvatar(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getMeInfo = useCallback(async () => {
    if (!resetInfo) return;
    setIsLoadingPage(true);
    try {
      const data = await userApi.getMe();
      setUserInfo(data);
      if (data.avatar) {
        getAvatar(data.avatar);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setResetInfo(false);
      setIsLoadingPage(false);
    }
  }, [getAvatar, resetInfo]);

  useEffect(() => {
    getMeInfo();
  }, [getMeInfo]);

  const value = {
    isLoadingPage,
    setIsLoadingPage,
    isShowSidebar,
    setIsShowSidebar,
    userInfo,
    avatar,
    setResetInfo,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
