import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

function App() {

  const fetchVideoList = async () => {
    const response = await axios.get(` http://localhost:8081/activity`);
    return response.data;
};
useEffect(() => {
  fetchVideoList();
}, []); 
  // const clickHandler = () => {

  // };

  return(
    // <main className="activity">
    //   <button className='activity__btn' onClick={clickHandler}>ARE YOU BORED?</button>
      
    // </main>

    <h1>Hello</h1>
  );
    
}

export default App
