import {createGlobalStyle, styled} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {

    --background: #F0F2F5;
    --primary: #1666ba;
    --secondary: #bedaf7;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

