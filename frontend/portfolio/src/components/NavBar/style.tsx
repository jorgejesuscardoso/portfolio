import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 100%;
  padding: 10px;
  img {
    width: 100%;
  }
`;
export const NavSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 10px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--list-color);
    background-color: transparent;
    color: var(--text-color);
    font-weight: 600;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;
export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 20%;
  background-color: var(--background-color-1);
  box-shadow: 0px 3px 1px 1px #000;
  z-index: 100;
  transform: translateX(-100%);
  transition: 0.5s;

  &.show {
    transform: translateX(0);
  }
`;
export const NavAsideLeft = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 95%;
  height: 100%;
  overflow-x: hidden;
  z-index: 100;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 10px;
      border-left: 5px solid transparent;
      cursor: pointer;
      img {
        width: 30px;
        margin-right: 10px;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 100%;
        height: 100%;
        padding: 15px;
        font-weight: 600;
        color: var(--link-color);
        transition: 0.1s;
        
      }
      &:hover {
          color: var(--link-color-hover);
          background-color: var(--list-color-hover);
          border-left: 5px solid var(--link-color-hover);
        }
    }
  }
  span {
    font-weight: 600;
    color: var(--link-color);
    transition: 0.1s;
    margin-left: 15px;
  }
`;
export const NavBarContainerSimple = styled.div`
  position: fixed;
  top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  height: 100%;
  width: 11%;
  overflow-x: hidden;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    width: 65%;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      height: 40px;
      padding: 10px;
      border-left: 5px solid transparent;
      cursor: pointer;
      img {
        width: 30px;
        margin-right: 10px;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 100%;
        height: 100%;
        padding: 15px;
        font-weight: 600;
        color: var(--link-color);
        transition: 0.1s;
        &:hover {
          color: var(--link-color-hover);
        }
        
      }
      &:hover {
          color: var(--link-color-hover);
          border-left: 5px solid var(--link-color-hover);
          cursor: pointer;
        }
    }
  }
  &.hiden {
    display: none;
  }
  span {
    font-weight: 600;
    color: var(--link-color);
    transition: 0.1s;
    margin-left: 15px;
  }
`;