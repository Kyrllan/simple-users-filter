import {User} from '../../models/User';
import {Card, CardContent, CardEmptyContent} from './styles';

interface DetailsProps {
  selectedItem: User;
}

export function Details({selectedItem}: DetailsProps) {
  return (
    <Card>
      {selectedItem.id === 0 ? (
        <CardEmptyContent>
          <h2>Select an user</h2>
        </CardEmptyContent>
      ) : (
        <CardContent>
          <div className="title-card">
            <img
              className="avatar"
              src={selectedItem.image}
              alt={selectedItem.firstName}
            />
            <div className="main-card">
              <div className="name">
                <h2>
                  {selectedItem.firstName} {selectedItem.lastName}
                </h2>
              </div>
              <div className="name-details">{selectedItem.email}</div>
              <div className="address-details">
                {selectedItem.address.city}/ {selectedItem.address.state}
              </div>
            </div>
            <div>
              <h1>{selectedItem.age}y</h1>
            </div>
          </div>
          <div className="body-card">
            <span className="body-card-text">Birthdate</span>
            <h3>
              {new Intl.DateTimeFormat('pt-Br').format(
                new Date(selectedItem.birthDate),
              )}
            </h3>
            <span className="body-card-text">Gender</span>
            <h3>{selectedItem.gender}</h3>
            <span className="body-card-text">Phone</span>
            <h3>{selectedItem.phone}</h3>
            <br></br>
            <span className="body-card-text">Address</span>
            <h2>
              {selectedItem.address.address}, {selectedItem.address.postalCode}{' '}
              - {selectedItem.address.city}/{selectedItem.address.state}{' '}
            </h2>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
