import { ValidateTokenApi } from '../services/UserService';
import { RemoveLocalStorage } from './LocalStorage';

const isValidToken = async (token: string) => {
  try {
    const isTokenValid = await ValidateTokenApi(token);
    if (!isTokenValid) {
      RemoveLocalStorage('token');
      return false;
    }
    return isTokenValid;
  } catch (error) {
    console.log(error);
  }
}

export default isValidToken;