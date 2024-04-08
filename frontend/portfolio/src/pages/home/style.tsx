import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 11vh;
`;
export const IFrameYt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: var(--frame-bg);
  iframe {
    width: 70%;
    height: 90%;
  }
`;
