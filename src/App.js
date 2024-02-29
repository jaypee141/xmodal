import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername]=useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone]=useState("");
  const [dateB, setDateB]=useState("");
  const [vError, setvError]=useState("");

  const openModal=()=>{
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setIsModalOpen(false);
    setvError("");
  }
  const handleSubmit=()=>{
    if(!username || !email || !phone || !dateB){
      setvError("Please fill in all fields.");
      return;
    }
  // }
  if(!/^\d{10}$/.test(phone)){
    setvError("Invalid phone number. Please enter a 10-digit phone number.")
    return;
  }
  const currentDate=new Date();
  const selectedDate=new Date(dateB);
  if (selectedDate>currentDate){
    setvError("Invalid date of birth. Please enter a valid date.")
    return;
  }
  closeModal();
  setUsername("");
  setEmail("");
  setPhone("");
  setDateB("");
};


  return (
    <div className="App">
      <div><h1>User Details Modal</h1></div>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          
          <div className="div1" onClick={(e) => e.stopPropagation()}>
            
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} required
              /><br/>

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required
              /><br/>

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone} required
                onChange={(e) => setPhone(e.target.value)}
              /><br/>

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dateB}
                onChange={(e) => setDateB(e.target.value)} required
              /><br/>

              <button
                type="button"
                className="submit-button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            {vError && <p>{vError}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
