import AsyncStorage from '@react-native-async-storage/async-storage';
import {decrypt, encrypt} from './encryptions';
import logger from './logger';

export const getItemFromStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return decrypt(data);
    } else {
      return null;
    }
  } catch {
    logger('Did not get data from the memory');
  }
};

export const setItemToStorage = async (key: string, val: object | string) => {
  try {
    const data = encrypt(val);
    await AsyncStorage.setItem(key, data);
    return data;
  } catch {
    logger('Did not save data in the memory');
  }
};

export const removeItemFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    logger('Did not remove data from the memory');
  }
};
