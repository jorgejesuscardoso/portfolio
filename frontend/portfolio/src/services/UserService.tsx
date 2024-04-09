import { UserLoginType, UserRegisterType } from '../Types';

const URL = 'http://localhost:3030';

const RegisterApi = async (data: UserRegisterType) => {
  try {
    const response = await fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to register');
    }
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

const LoginApi = async (data: UserLoginType) => {
  try {

    const response = await fetch(`${URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to login');
    }
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

const GetAllUsersApi = async () => {
  try {
    const response = await fetch(`${URL}/users`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const GetUserApi = async (id: number) => {
  try {
    const response = await fetch(`${URL}/users/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const GetUserByEmailApi = async (email: string) => {
  try {
    const response = await fetch(`${URL}/users/email/${email}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch user');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const UpdateUserApi = async (id: number, data: UserRegisterType) => {
  try {
    const response = await fetch(`${URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to update user');
    }
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

const DeleteUserApi = async (id: number) => {
  try {
    const response = await fetch(`${URL}/users/${id}`, {
      method: 'DELETE',
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to delete user');
    }
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

const GetPostsApi = async () => {
  try {
    const response = await fetch(`${URL}/posts`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch posts');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const ValidateTokenApi = async (token: string) => {
  try {
    const response = await fetch(`${URL}/users/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application',
        'Authorization': `Bearer ${token}`,
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to validate token');
    }
    return responseData;
  } catch (error) {
    console.error('Error:', error);
  }
}

export {
  LoginApi,
  RegisterApi,
  GetUserApi,
  GetAllUsersApi,
  GetUserByEmailApi,
  UpdateUserApi,
  DeleteUserApi,
  GetPostsApi,
  ValidateTokenApi,
}