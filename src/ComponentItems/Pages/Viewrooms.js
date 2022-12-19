// import React from 'react';

// const Viewerooms = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Right',
//         alignItems: 'Right',
//         height: '100vh'
//       }}
//     >
//       <h1>View rooms</h1>
//     </div>
//   );
// };

// export default Viewerooms;
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Viewroom.css';
import { CSSTransition } from 'react-transition-group';
// import CreateSlot from './CreateSlot';

const Viewrooms = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: 'Room 1',
      type: 'Pre-allocated',
    },
    {
      id: 2,
      name: 'Room 2',
      type: 'None-allocated',
    },
    // additional rooms go here
  ];

  const handleCreateSlot = (roomId) => {
    navigate(`/create-slot/${roomId}`);
  };

  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.name}</td>
              <td>{room.type}</td>
              <td>
                <Button
                  variant="link"
                  className="action-button"
                  onClick={() => handleCreateSlot(room.id)}
                >
                  Create a Slot
                </Button>
                <Link to="/view-slots">
                  <Button variant="link" className="action-button">
                    View Slots
                  </Button>
                </Link>
                <Link to="/view-users">
                  <Button variant="link" className="action-button">
                    View Users
                  </Button>
                </Link>
                <Link to="/add-users">
                  <Button variant="link" className="action-button">
                    Add Users
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CSSTransition>
  );
};

export default Viewrooms;


