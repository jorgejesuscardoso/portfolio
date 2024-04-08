import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: var(--background-color-1);
`;
export const LogoContainer = styled.div`
  width: 13%;
  height: 10vh;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10vh;
  input {
    width: 100%;
    height: 40%;
    background-color: transparent;
    border: none;
    color: var(--text-color-1);
    font-size: 1.2rem;
    padding-left: 1rem;
    border: 1px solid var(--border-color);
    border-right: none;
    border-radius: 10px 0  0 10px;
    &::placeholder {
      color: var(--placeholder-color);
    }
    &:focus {
      outline: none;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5%;
    height: 40%;
    font-size: 1.5rem;
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-left: none;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    img {
      width: 2rem;
      height: 2rem;
    }
    &:focus {
      outline: none;
    }
  }
`;
export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6%;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  cursor: pointer;
  img {
    width: 35%;
    height: 2rem;
  }
  span {
    text-align: center;
    font-size: 1rem;
    width: 40%;
    border-left: 1px solid var(--border-color);
    margin-left: 0.5rem;
  }
`;