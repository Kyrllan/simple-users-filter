import {Header} from './components/Header';
import {List} from './components/List';
import {GlobalStyle, Container} from './styles/global';

function App() {
  return (
    <>
      <Container>
        <Header />
        <List />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
