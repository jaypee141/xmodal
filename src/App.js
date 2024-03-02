import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername]=useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone]=useState("");
  const [dateB, setDateB]=useState("");
  const [vError, setvError]=useState("");
  const modalRef=useRef();

  const openModal=()=>{
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setIsModalOpen(false);
    setvError("");
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!username || !email || !phone || !dateB){
      setvError("Please fill in all fields.");
      return;
    }
  // }
  if(!/^\d{10}$/.test(phone)){
    window.alert("Invalid phone number. Please enter a 10-digit phone number.")
    return;
  }
  const currentDate=new Date();
  const selectedDate=new Date(dateB);
  if (selectedDate>currentDate){
    window.alert("Invalid date of birth. Date of birth cannot be in the future.")
    return;
  }
  closeModal();
  setUsername("");
  setEmail("");
  setPhone("");
  setDateB("");
};
// <***** data*******>
const callUName = (e) => {
  setUsername(e.target.value);
}
const callEmail = (e) =>{
  setEmail(e.target.value);
} 
const callPhone= (e) => {
  setPhone(e.target.value);
}
const callDob = (e) =>{
  setDateB(e.target.value);

}



const handleOutsideClick = (e) => {
  if (modalRef.current && !modalRef.current.contains(e.target)) {
    closeModal();
  }
};

return (
  <div className="App">
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
    </div>
    {isModalOpen && (
      <div className="modal" ref={modalRef}>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <h2>Fill Details</h2>
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" id="username" value={username} onChange={callUName} required />
            <br />
            <label htmlFor="email">Email Address:</label>
            <br />
            <input type="email" id="email" value={email} onChange={callEmail} required />
            <br />
            <label htmlFor="phone">Phone Number:</label>
            <br />
            <input type="number" id="phone" value={phone} onChange={callPhone} required />
            <br />
            <label htmlFor="dob">Date of Birth:</label>
            <br />
            <input type="date" id="dob" value={dateB} onChange={callDob} required />
            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    )}
    {isModalOpen && (
      // Add an overlay to capture clicks outside the modal
      <div className="modal-overlay" onClick={handleOutsideClick}></div>
    )}
  </div>
);
    }
    export default App;