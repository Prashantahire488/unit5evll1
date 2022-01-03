import './App.css';
import React, { useState } from 'react';





function App() 
{
   const [data,setData] = useState({});

  const handleText = (e) =>
  {
    const {name , value } = e.target;
    setData({...data, [name]: value});
  }


  const handleSubmit = (e) =>
  {
    
    e.preventDefault();

    fetch("http://localhost:3001/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      setData({});
    });

  
  }

  return (
    <div className="App">
     <div>
       <div>
          <h2>
            Recipe :
          </h2>
          <form  onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title"  onChange={handleText} />
            <br />
            <input type="text" name="ingedients" placeholder="Ingredients" onChange={handleText} />
            <br />
            <input type="text" name="time" placeholder="Cooking Time" onChange={handleText} />
            <br />
            <input type="text" name="image" placeholder="Image Link" onChange={handleText} />
            <br />
            <input type="text" name="instructions" placeholder="Instructions" onChange={handleText} />
            <br />
            <button type="submit">Submit</button>  
          </form>
       </div>
       <div>

       </div>
     </div>
     <div>

     </div>
    </div>
  );
}

export default App;