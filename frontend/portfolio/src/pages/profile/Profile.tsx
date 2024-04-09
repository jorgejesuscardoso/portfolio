import { useEffect, useState } from 'react';
import { MainHeaderProfile, MainProfileContainer } from './style';
import { GetLocalStorage } from '../../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';
import isValidToken from '../../utils/Validate';
import { ProfileType } from '../../Types';


const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ProfileType>();
  
  const handleToken = async () => {
    const token = GetLocalStorage('token');
    if (!token) {
      navigate('/login');
    }
    if (token) {
      const isValid = await isValidToken(token)
      if (!isValid) {
        navigate('/login');
      }
      setData(isValid);
    }
  };
  useEffect(() => {
    handleToken();
  }, []);
  
  return (
    <MainProfileContainer>
      <MainHeaderProfile>
        <h1>Perfil</h1>
        <div>
          <img src={data?.image || 'ico_user_test.png'} alt="Imagem de perfil" />
          <p>ID: {data?.id}</p>
          <p>Nome: {data?.fullName}</p>
          <p>Username: {data?.username}</p>
          <p>Email: {data?.email}</p>
          <p>Endereço: {data?.address}</p>
          <p>Data de Nascimento: {data?.birthday}</p>
        </div>
      </MainHeaderProfile>
    </MainProfileContainer>
  );
}

export default Profile;