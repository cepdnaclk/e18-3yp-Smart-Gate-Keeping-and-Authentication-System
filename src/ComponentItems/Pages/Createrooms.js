// import React from 'react';
  
// const Createrooms = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Right',
//         alignItems: 'Right',
//         height: '100vh'
//       }}
//     >
//       <h1>Create rooms</h1>
//     </div>
//   );
// };
  
// export default Createrooms;




import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import '../Form/Form.css';
 
function Createrooms() {
    const [name , setName] = useState('');
    const [Rid , setroomId] = useState('');
    
 
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    
    const handleRoomIdChange =(e)=>{
      setroomId(e.target.value);
    }
    
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{ 
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
     
      e.preventDefault();

    }
  return (
    <div className="App">
      
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    <h2> CREATE ROOMS </h2>
    <h4> Room Registration Form </h4>
    {/* <img src="/gfg.png" /> */}
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
          <label >
          Room id:
        </label><br/>
        <input type="text" value={Rid} required onChange={(e)=> {handleRoomIdChange(e)}} /><br/>
          { /*when user write in id input box , handleChange()
              function will be called. */}
        <input type="submit" value="Create"/>
      </form>
    </header>
    </div>
  );
}
 


export default Createrooms;






