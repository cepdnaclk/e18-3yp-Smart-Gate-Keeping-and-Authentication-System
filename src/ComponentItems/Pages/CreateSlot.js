import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';


const CreateSlot = (props) => {
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add code to handle the form submission here
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <div className="title-bar">
        <h2>Create a Slot for Room {room.id}</h2>
        <h3>{room.name}</h3>
      </div>
        <FormGroup>
          <Label for="start-time">Start Time</Label>
          <DateTimePicker
            id="start-time"
            value={startTime}
            onChange={(time) => setStartTime(time)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="end-time">End Time</Label>
          <DateTimePicker
            id="end-time"
            value={endTime}
            onChange={(time) => setEndTime(time)}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Create Slot
        </Button>
      </Form>
    );
  };
  
  export default CreateSlot;
  