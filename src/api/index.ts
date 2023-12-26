import {LOGIN_SESSION_KEYCHAIN_KEY} from '../utils/constants';
import {
  getItemFromKeychain,
  removeItemFromKeychain,
  setItemToKeychain,
} from '../utils/keychain';
import logger from '../utils/logger';

export const checkLogin = async () => {
  try {
    const user = await getItemFromKeychain(LOGIN_SESSION_KEYCHAIN_KEY);
    if (user) {
      return user.username;
    }
    return false;
  } catch (error) {
    logger(error);
    return false;
  }
};

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    await setItemToKeychain(username, password, LOGIN_SESSION_KEYCHAIN_KEY);
  } catch (error) {
    logger(error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await removeItemFromKeychain(LOGIN_SESSION_KEYCHAIN_KEY);
  } catch (error) {
    logger(error);
  }
};
