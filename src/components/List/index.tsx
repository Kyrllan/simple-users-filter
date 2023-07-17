import {ChangeEvent, useEffect, useState} from 'react';
import {Content} from './styles';
import {User} from '../../models/User';

interface ListOfItens {
  onItemSelected: (user: User) => void;
}

export function List({onItemSelected}: ListOfItens) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=100')
      .then((response) => response.json())
      .then((data: {users: User[]}) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findedUsers = users.filter((user: User) => {
    return user.firstName.toLowerCase().includes(search.toLowerCase());
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleItemClick = (user: User) => {
    onItemSelected(user);
  };

  return (
    <Content>
      <div className="input-card">
        <input
          type="text"
          placeholder="Find user"
          onChange={handleInputChange}
          value={search}
        />
      </div>
      <div className="list-card">
        <div className="list-card-content">
          <ul>
            {findedUsers.map((user) => {
              return (
                <li key={user.id} onClick={() => handleItemClick(user)}>
                  <img
                    className="profile-image"
                    src={user.image}
                    alt={`${user.firstName} + ${user.id}`}
                  />
                  <div>
                    <div className="user-name">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="user-details">{user.email}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Content>
  );
}
