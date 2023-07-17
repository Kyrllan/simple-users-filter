import {Header} from './components/Header';
import {List} from './components/List';
import {Details} from './components/Details';
import {
  GlobalStyle,
  Container,
  Content,
  Column1,
  Column2,
} from './styles/global';
import {useState} from 'react';
import {User} from './models/User';

function App() {
  const [selectedItem, setSelectedItem] = useState<User>({
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    phone: '',
    birthDate: '',
    image: '',
    address: {
      address: '',
      city: '',
      postalCode: '',
      state: '',
    },
  });

  const handleItemSelected = (item: User) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Column1>
            <List onItemSelected={handleItemSelected} />
          </Column1>
          <Column2>
            <Details selectedItem={selectedItem} />
          </Column2>
        </Content>
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
