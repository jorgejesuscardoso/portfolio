import styled from 'styled-components';

export const MainContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 0 20px;
  background-color: var(--modal-background-black);
  z-index: 1000;

  &.close-modal {
    display: none;
  }
  &.open-modal {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--modal-color);
      margin: 0 auto;
      width: 70%;
      height: 70vh;
      background-color: var(--modal-background);
      border-radius: 10px;
      z-index: 1000;

      img {
        position: fixed;
        top: 15vh;
        right: 17%;
        width: 40px;
        cursor: pointer;
      }
    }
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--green-2);
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--red-2);
  }
  p {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--modal-color);
  }
`;

export const MainContainerFixed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 0 20px;
  background-color: var(--modal-background);
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--modal-color);
      margin: 0 auto;
      width: 70%;
      height: 70vh;
      background-color: var(--modal-background);
      border-radius: 10px;
    }
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--green-2);
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--red-2);
  }
  p {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--modal-color);
  }
`;