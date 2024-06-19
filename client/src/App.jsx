import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

function App() {
  const [activity, setActivity] = useState([]);

  const getActivity = async () => {
    try {
      let res = await axios.get(`${API_URL + "/activity/random"}`);
      setActivity(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  if (activity.length < 1) {
    return <p>loading...</p>;
  }

  console.log(activity);

  const clickHandler = () => {
    getActivity();
  };

  return (
    <main className="activity">
      <button className="activity__btn" onClick={clickHandler}>
        ARE YOU BORED?
      </button>
      <div className="activity__wrapper">
        <h3>{activity.activity}</h3>

        <p>Availability: {activity.availability}</p>
        <p>Type: {activity.type}</p>
        <p>Participants: {activity.participants}</p>
        <p>Price: {activity.price}</p>
        <p>Accessibility: {activity.accessibility}</p>
        <p>Duration: {activity.duration}</p>
        <p>Kid Friendly: {activity.kidFriendly ? "yes" : "no"}</p>
      </div>
    </main>
  );
}

export default App;
