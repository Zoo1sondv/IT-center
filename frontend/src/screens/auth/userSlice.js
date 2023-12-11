import storageKeys from '@config/storageKeys';
import * as cryptoHelper from '@hooks/cryptoLocalHelpers';
import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '@services/auth/userService';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: cryptoHelper.getItemCrypto(storageKeys.USER) || {},
  },
  reducers: {
    logout(state) {
      cryptoHelper.removeItemCrypto(storageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
