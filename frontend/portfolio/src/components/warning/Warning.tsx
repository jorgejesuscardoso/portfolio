import { useEffect, useState } from 'react';
import { 
  MainContainer,
} from './style';
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage';

const Warning = () => {
  const [closed, setClosed] = useState(false);
  const [second, setSeconds] = useState(30);

  useEffect(() => {
    try {
      const warning = GetLocalStorage('warning');
      if (warning) {
        setClosed(true);
      } else {
        setTimeout(() => {
          setClosed(true);
        }, 30000);
        SetLocalStorage('warning', 'true');
      }
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  return (
    <MainContainer
      className={closed ? 'close-modal' : 'open-modal'}
      >
       <div>
        <img
            src="ico_close.png"
            alt="close"
            onClick={() => setClosed(true)}
          />
        <h1>Bem Vindo!</h1>
        <h2>Conteúdo em construção</h2>
        <p>Este é o meu novo portfólio, construído com React e TypeScript.</p>
        <p>Aqui, você encontrará uma amostra dos meus projetos e informações de contato.</p>
        <p>O site ainda está em construção, então algumas áreas podem estar incompletas.</p>
        <p>Sinta-se à vontade para explorar e entre em contato para mais detalhes.</p>
      </div>
      <span>
        fecha em {second} segundos
      </span>
    </MainContainer>
  );
}

export default Warning;