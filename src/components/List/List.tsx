import {useEffect, useState} from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
}

export function List() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=100')
      .then((response) => response.json())
      .then((data: {users: User[]}) => {
        console.log(data);
        setUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.firstName}</li>;
      })}
    </ul>
  );
}
