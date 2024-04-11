import styled from 'styled-components';

export const MenuConfig = styled.div`
  position: fixed;
  top: 40vh;
  left: 8%;
  min-width: 15%;
  min-height: 50vh;
  background: var(--background-color-3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    list-style-type: none;
    margin-top: 10px;
    gap: 15px;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 10px 0;
      border-left: 5px solid transparent;
      border-bottom: 1px solid var(--list-color);
      cursor: pointer;
      img {
        width: 27px;
        margin-right: 10px;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 100%;
        height: 100%;
        padding: 10px;
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
`;