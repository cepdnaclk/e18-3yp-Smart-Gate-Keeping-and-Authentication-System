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
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

const Viewerooms = () => {
  const { id } = useParams();
  const room = {
    id: id,
    name: 'Meeting Room 1',
    type: 'Pre-allocated',
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h1>Room Details</h1>
        </Col>
      </Row>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{room.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{room.name}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{room.type}</td>
          </tr>
        </tbody>
      </Table>
      <Row className="mt-5">
        <Col>
          <Button variant="primary">Create a Slot</Button>
        </Col>
        <Col>
          <Button variant="secondary">View Slots</Button>
        </Col>
        <Col>
          <Button variant="info">View Users</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Viewerooms;
