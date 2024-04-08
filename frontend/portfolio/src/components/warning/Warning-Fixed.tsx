
import { 
  MainContainerFixed,
} from './style';

const WarningFixed = () => {  
  return (
    <MainContainerFixed
      className={closed ? 'close-modal' : 'open-modal'}
      >
       <div>
        <h1>Bem Vindo!</h1>
        <h2>Este conteúdo está em construção</h2>
      </div>
    </MainContainerFixed>
  );
}

export default WarningFixed;