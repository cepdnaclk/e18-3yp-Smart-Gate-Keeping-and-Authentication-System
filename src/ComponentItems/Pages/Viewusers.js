// import React from 'react';
// import { Table , Button} from 'react-bootstrap';
// import './UserList.css';

  
// const Viewusers = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Right',
//         alignItems: 'Right',
//         height: '100vh'
//       }}
//     >
//       <h1>View User</h1>
//     </div>
//   );
// };
  
// export default Viewusers;

// const Viewusers = () => {
//   const users = [
//     { id: 1, name: 'John Smith', email: 'john@example.com', rooms: ['101', '102'] },
//     { id: 2, name: 'Jane Doe', email: 'jane@example.com', rooms: ['103', '104'] },
//     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', rooms: ['105'] }
//   ];

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Rooms</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(user => (
//           <tr key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>
//               {user.rooms.map(room => (
//                 <Button key={room} variant="secondary" className="room-button">{room}</Button>
//               ))}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default Viewusers;



import React, { useState } from 'react';
import { Table, Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserList.css';
import Navbar from './Navbarinstitute';


const Viewusers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([    { id: 1, name: 'John Smith', email: 'john@example.com', rooms: ['101', '102'] },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', rooms: ['103', '104'] },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', rooms: ['105'] },
    { id: 4, name: 'Jane Dog', email: 'jke@example.com', rooms: ['107', '104'] },
    { id: 5, name: 'Doe yut', email: 'yut@example.com', rooms: ['103', '109'] }
  ]);
  const [sort, setSort] = useState({ column: null, direction: 'asc' });
  const [search, setSearch] = useState('');

  const handleSort = column => {
    if (sort.column === column) {
      setUsers(users.reverse());
      setSort({ ...sort, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setUsers(users.sort((a, b) => (a[column] > b[column] ? 1 : -1)));
      setSort({ column, direction: 'asc' });
    }
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleRoomClick = room => {
    navigate.push(`/room/${room}`);
  };

  return (
    <>
    <Navbar />
      <Form inline className="mb-3">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={handleSearch} />
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID
              {sort.column === 'id' ? (sort.direction === 'asc' ? ' 🔺' : ' 🔻') : ''}
            </th>
            <th onClick={() => handleSort('name')}>
              Name
              {sort.column === 'name' ? (sort.direction === 'asc' ? ' 🔺' : ' 🔻') : ''}
            </th>
            <th onClick={() => handleSort('email')}>
              Email
              {sort.column === 'email' ? (sort.direction === 'asc' ? ' 🔺' : ' 🔻') : ''}
            </th>
            <th>Rooms</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.rooms.map(room => (
                  <Button key={room} variant="secondary" className="room-button" onClick={handleRoomClick}>{room}</Button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
};

 export default Viewusers; 

