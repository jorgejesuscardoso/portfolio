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
  height: 4vh;

  input {
    width: 70%;
    height: 100%;
    border-radius: 5px 0 0 5px;
    border: 1px solid var(--list-color);
    border-right: none;
    background-color: transparent;
    padding-left: 20px;
    color: var(--text-color);
    font-size: 0.8rem;
    font-weight: 600;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--placeholder-color);
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 100%;
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-left: none;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    img {
      height: 1.3rem;
    }
    &:focus {
      outline: none;
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
  border-right: 1px solid var(--border-color-2);
  z-index: 1;
  transform: translateX(-100%);
  transition: 0.5s;

  &.show {
    z-index: 100;
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
    height: 100%;
    list-style-type: none;
    margin-top: 10px;
    gap: 20px;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 10px 15px;
      border-left: 5px solid transparent;
      cursor: pointer;
      img {
        width: 1.3vw;
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
        font-size: 0.8rem;
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
    font-size: 0.8rem;
    margin-left: 15px;
  }
`;
export const NavBarContainerSimple = styled.div`
  position: fixed;
  top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 90vh;
  margin-top: 5vh;
  width: 8%;
  overflow-x: hidden;
  background-color: var(--background-color-1);
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    padding: 10px;
    gap: 30px;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      height: 40px;
      padding: 10px 15px;
      border-left: 5px solid transparent;
      // border-bottom: 1px solid var(--border-color-2);
      cursor: pointer;
      img {
        width: 1.3vw;
        margin-right: 10px;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.8rem;
        color: var(--link-color);
        transition: 0.1s;
        z-index: 100;
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
  span {
    font-weight: 600;
    color: var(--link-color);
    transition: 0.1s;
    margin-left: 2px;
    font-size: 0.8rem;
    &:hover {
      color: var(--link-color-hover);
    }
  }
`;
export const NavBarContainerSimpleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  background-color: var(--background-color-1);
  border-top: 1px solid var(--border-color-2);
  z-index: 1;
  p {
    font-size: 0.8rem;
    a {
      text-decoration: none;
      color: var(--link-color);
      transition: 0.1s;
      &:hover {
        color: var(--link-color-hover);
      }
    }
  }
  img {
    width: 20%;
    cursor: pointer;
  }
`;
export const NavBarConfig = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  height: 5vh;
  padding: 20px;
  img {
    width: 23px;
    cursor: pointer;
  }
`;