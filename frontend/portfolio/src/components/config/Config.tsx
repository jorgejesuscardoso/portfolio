
import { Link } from 'react-router-dom';
import { MenuConfig } from './style';

const Config = () => {
  return (
    <MenuConfig>
      <ul>
        <li>
          <Link to='/profile'>
            <img src="ico_profile_3.png" alt="Perfil" />
           Profile 
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <img src="ico_registrar.png" alt="registrar" />
              Registrar
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <img src="ico_login.png" alt="login" />
              Login
          </Link>
        </li>
      </ul>      
    </MenuConfig>
  );
}

export default Config;