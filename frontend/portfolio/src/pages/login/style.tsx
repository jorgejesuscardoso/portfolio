import styled from 'styled-components';

export const MainProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13vh;
  width: 100%;
  height: 90vh;
  h1 {
    margin-bottom: 2vh;
  }
`;

export const MainHeaderProfile = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;
`;
export const FormProfile = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  margin-top: 2vh;
  padding: 2vh;
  border-radius: 2vh;
  background-color: var(--background-form);
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin-bottom: 1vh;
    label {
      font-size: 0.9rem;
      color: var(--text-color-black);
      width: 100%;
      margin-bottom: 0.5vh;
    }
    input {
      width: 100%;
      height: 4vh;
      border-radius: 0.5vh;
      border: 0.1vh solid black;
      padding-left: 0.5vh;
      &:focus {
      outline-style: solid;
      outline-color: var(--input-outline);
      outline-width: 2px;
    }
    }
  }
  h1 {
    color: var(--text-color-black);
  }
  span {
    margin-top: 1vh;
  }
`;
export const ButtonsForm = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  width: 100%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 4vh;
    border-radius: 0.5vh;
    border: 1px solid black;
    cursor: pointer;
    &:focus {
      outline-style: solid;
      outline-color: var(--button-outline);
      outline-width: 2px;
    }
  }
`;