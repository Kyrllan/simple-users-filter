import {Header} from './components/Header';
import {List} from './components/List';
import {
  GlobalStyle,
  Container,
  Content,
  Column1,
  Column2,
} from './styles/global';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Column1>
            <List />
          </Column1>
          <Column2>DETALHES</Column2>
        </Content>
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
