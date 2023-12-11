import CryptoJS from 'crypto-js';
import { localStorageHelper } from '@hooks/localStorageHelpers';
import { constantKeys } from '@config';

const setItemCrypto = (key, value) => {
  if (!localStorage) {
    return;
  }

  try {
    const lsValue = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      constantKeys.SECRET_KEY,
    ).toString();
    localStorageHelper.setItem(key, lsValue);
  } catch (error) {
    console.error(key, ' LOCAL STORAGE SAVE ERROR', error);
  }
};

const getItemCrypto = (key) => {
  if (!localStorage) {
    return;
  }
  const lsValue = localStorageHelper.getItem(key);
  if (!lsValue) {
    return;
  }

  try {
    var bytes = CryptoJS.AES.decrypt(
      lsValue.toString(),
      constantKeys.SECRET_KEY,
    );
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    const value = JSON.parse(originalText);

    if (value) {
      return value;
    }
  } catch (error) {
    console.error(key, ' LOCAL STORAGE PARSE ERROR', error);
  }
};

const removeItemCrypto = (key) => {
  if (!localStorage) {
    return;
  }

  try {
    localStorageHelper.removeItem(key);
  } catch (error) {
    console.error(key, ' LOCAL STORAGE REMOVE ERROR', error);
  }
};

export { getItemCrypto, setItemCrypto, removeItemCrypto };
