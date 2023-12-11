import storageKeys from '@config/storageKeys';
import * as cryptoHelper from '@hooks/cryptoLocalHelpers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '@services/api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
  // Call API register
  const data = await userApi.register(payload);

  // Save data to local storage
  cryptoHelper.setItemCrypto(storageKeys.USER, data);

  // Return user data
  return data;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  // Call API register
  const data = await userApi.login(payload);

  // Save data to local storage
  cryptoHelper.setItemCrypto(storageKeys.USER, data);

  // Return user data
  return cryptoHelper.getItemCrypto(storageKeys.USER);
});
