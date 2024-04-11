import { useEffect, useState } from 'react';
import { 
  LoginApi,
} from '../../services/UserService';
import {
  UserLoginType
} from '../../Types';
import { 
  ButtonsForm, 
  FormProfile, 
  MainHeaderProfile, 
  MainProfileContainer,
} from './style';
import { GetLocalStorage, SetLocalStorage } from '../../utils/LocalStorage';
import { Link, useNavigate } from 'react-router-dom';
import isValidToken from '../../utils/Validate';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserLoginType>({
    email: '',
    password: '',
  });
  const [erroLogin, setErrorLogin] = useState<string>('');
  
  useEffect(() => {
    handleToken();
  }, []);

  const handleToken = async () => {
    const token = GetLocalStorage('token');
    if (token) {
      const isValid = await isValidToken(token)
      if (isValid) {
        navigate('/profile');
      }
    }
  };

  const handleLogin = async () => {
    try { 
      const response = await LoginApi(user);
      console.log(response);
      if (!response) {
        setErrorLogin('Usuário ou senha incorretos');
        return;
      }
      SetLocalStorage('token', response.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainProfileContainer>
      <MainHeaderProfile>
        <h1>Staffzone</h1>
        <p>
          Está é uma área restrita, faça login para acessar.
        </p>
        <p>
          Fale com o administrador para obter acesso.
        </p>
      </MainHeaderProfile>
      <FormProfile 
        onSubmit={async (e) => {
        e.preventDefault();
        await handleLogin();
        }}
      >
        <h1>Login</h1>
        <div>
          <label
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={
              (e) => setUser({...user, email: e.target.value}
            )}
          />
        </div>
        <div>
          <label
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            id='password'
            onChange={
              (e) => setUser({...user, password: e.target.value})}
          />
        </div>
        <ButtonsForm>
          <button
            type="submit"
          >
            Login
          </button>
          <button
            type="reset"
          >
            Reset
          </button>
        </ButtonsForm>
        <span>
          <Link to='/'>Página inicial</Link>
        </span>
      </FormProfile>
      {erroLogin && <p>{erroLogin}</p>}
    </MainProfileContainer>
  );
}

export default Login;