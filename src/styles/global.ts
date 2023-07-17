import {createGlobalStyle, styled} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {

    --background: #EEEBE5;
    --background2: #F7F6F2;
    --background3: #cdd0db;
    --background4: #FFF8DD;
    --primary: #1666ba;
    --secondary: #bedaf7;
    --tertiary: #DCD9D2;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar-track{
      border-radius: 3px;
      background-color: #FFFFFF;
    }

    &::-webkit-scrollbar{
      border-radius: 3px;
      width: 6px;
      background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: var(--tertiary);
    }
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
  min-width: 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Column1 = styled.div`
  flex-basis: 40%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const Column2 = styled.div`
  flex-basis: 60%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;
