import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@screens/auth/userSlice';

const rootReducer = {
  user: userReducer,
};

const storeRedux = configureStore({
  reducer: rootReducer,
});

export default storeRedux;
