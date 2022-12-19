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
import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Viewroom.css";

const Viewrooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Room 1",
      type: "Pre-allocated",
    },
    {
      id: 2,
      name: "Room 2",
      type: "None-allocated",
    },
    // additional rooms go here
  ];

  return (
    <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
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
                <Link to="/create-slot">
                  <Button variant="link" style={{ color: "black" }}>
                    Create a Slot
                  </Button>
                </Link>
                <Link to="/view-slots">
                  <Button variant="link" style={{ color: "black" }}>
                    View Slots
                  </Button>
                </Link>
                <Link to="/view-users">
                  <Button variant="link" style={{ color: "black" }}>
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
