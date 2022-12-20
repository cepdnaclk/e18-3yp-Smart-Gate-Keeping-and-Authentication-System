import React, { useState } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';
import '../Form/Form.css';
import { useLocation } from 'react-router-dom';


const CreateSlot = (props) => {
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const location = useLocation();
    console.log(props,"props");

    const data = location.state?.data;
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add code to handle the form submission here
    };
    return (
        <div className="App">
      <Form onSubmit={handleSubmit}>
      <header className="App-header">
        <div className="title-bar">
        <h2>Create a Slot for Room </h2>
        <h3>{data.name}</h3>
      </div>
      <br/>
      <br/>
        <FormGroup>
          <Label for="start-time">Start Time</Label>
          <DateTimePicker
            id="start-time"
            value={startTime}
            onChange={(time) => setStartTime(time)}
          />
        </FormGroup>
        <br/>
        <br/>
        <FormGroup>
          <Label for="end-time">End Time</Label>
          <DateTimePicker
            id="end-time"
            value={endTime}
            onChange={(time) => setEndTime(time)}
          />
        </FormGroup>
        <br/>
        <br/>
        {/* <Button type="submit" color="primary">
          Create Slot
        </Button> */}
        <input type="submit" value=" Create Slot"/>
      </header>
      </Form>
      </div>
    );
  };
  
  export default CreateSlot;
  