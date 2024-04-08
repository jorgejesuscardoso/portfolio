import { useState } from 'react';
import { 
  LogoContainer,
  MainHeaderContainer,
  SearchContainer,
  ThemeContainer
} from './style';

type Theme = 'light' | 'dark';

const MainHeader = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <MainHeaderContainer>
      <LogoContainer>
        <img src="logo3.png" alt="logomarca - bushido developer" />
      </LogoContainer>
      <SearchContainer>
        <input 
          type="text"
          placeholder="Pesquisa... Ex: Projetos, Stacks, contato, conteúdo,etc"
        />
        <button
          type='submit'
        >
          <img src="ico_search.png" alt="Ícone de pesquisa" />
        </button>
      </SearchContainer>
      <ThemeContainer
        onClick={handleTheme}
        style={{
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        <img 
          src={theme === 'dark' ? 'ico_turn_light_model.png' : 'ico_turn_dark_model.png'}
          alt="Mudar tema dark ou light"
        />
        <span>{
          theme === 'dark' ? ' 🌙' : ' 🌞'
          }</span>
      </ThemeContainer>
    </MainHeaderContainer>
  );
}

export default MainHeader;