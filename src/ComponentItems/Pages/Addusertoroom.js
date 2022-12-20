
import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import '../Form/Form.css';
import { useLocation } from 'react-router-dom';
 

const Addusertorooms = (props) => {
    const [name , setName] = useState('');
    const [Uid , setuserId] = useState('');
    const location = useLocation();
    console.log(props,"props");
    const data = location.state?.data;
 
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    
    const handleRoomIdChange =(e)=>{
      setuserId(e.target.value);
    }
    
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{ 
        // if 'password' and 'confirm password'
        // does not match.
        // alert("password Not Match");
     
      e.preventDefault();

    }
  return (
    <div className="App">
      
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    <h2> ADD USER TO ROOM </h2>
    <h4> Adding Users </h4>
    <h3>{data.name}</h3>
    {/* <img src="/gfg.png" /> */}
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
          <label >
          User id:
        </label><br/>
        <input type="text" value={Uid} required onChange={(e)=> {handleRoomIdChange(e)}} /><br/>
          { /*when user write in id input box , handleChange()
              function will be called. */}
        <input type="submit" value="Add"/>
      </form>
    </header>
    </div>
  );
}
 


export default Addusertorooms;
