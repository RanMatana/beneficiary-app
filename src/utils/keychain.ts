import * as Keychain from 'react-native-keychain';

export const getItemFromKeychain = async (service: string) => {
  try {
    const data = await Keychain.getGenericPassword({service});
    if (data) {
      return {
        username: data.username,
        password: JSON.parse(data.password),
        service: data.service,
        storage: data.storage,
      };
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const setItemToKeychain = async (
  key: string,
  val: object | string,
  service: string,
) => {
  try {
    await Keychain.setGenericPassword(key, JSON.stringify(val), {service});
  } catch {
    return null;
  }
};
export const removeItemFromKeychain = async (service: string) => {
  try {
    await Keychain.resetGenericPassword({service});
  } catch {
    return null;
  }
};
