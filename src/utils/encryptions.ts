import CryptoJS from 'react-native-crypto-js';
import {CRYPTO_KEY} from './constants';

export const encrypt = (data: object | string) => {
  const crypto = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    CRYPTO_KEY,
  ).toString();
  return crypto;
};

export const decrypt = (data: string) => {
  let bytes = CryptoJS.AES.decrypt(data, CRYPTO_KEY);
  const crypto = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return crypto;
};
