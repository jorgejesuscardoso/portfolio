import styled from 'styled-components';

export const MainFooter = styled.footer`
  background-color: var(--background-footer);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10vh;
  .copy {
    color: var(--text-copy-color);
    font-size: 1rem;
  }
`;