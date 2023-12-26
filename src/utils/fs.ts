import {
  writeFile,
  readFile,
  DocumentDirectoryPath,
  unlink,
} from 'react-native-fs';
import {decrypt, encrypt} from './encryptions';

export const writeJson = async (
  name: string,
  data: any,
): Promise<boolean | null> => {
  const path = `${DocumentDirectoryPath}/.${name}.txt`;
  try {
    await writeFile(path, encrypt(data), 'utf8');
    return true;
  } catch (error) {
    return null;
  }
};

export const readJson = async (name: string): Promise<any | null> => {
  const path = `${DocumentDirectoryPath}/.${name}.txt`;
  try {
    const result = await readFile(path, 'utf8');
    return decrypt(result);
  } catch (error) {
    return null;
  }
};

export const deleteJson = async (name: string): Promise<any | null> => {
  const path = `${DocumentDirectoryPath}/.${name}.txt`;
  try {
    await unlink(path);
    return true;
  } catch (error) {
    return null;
  }
};
