import "./App.scss";
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
        <h3 className="activity__title">{activity.activity}</h3>
        <div className="activity__data">
          <p className="activity__desc">
            <b>Availability: </b>
            {activity.availability}
          </p>
          <p className="activity__desc">
            <b>Type: </b>
            {activity.type}
          </p>
          <p className="activity__desc">
            <b>Participants: </b>
            {activity.participants}
          </p>
          <p className="activity__desc">
            <b>Accessibility: </b>
            {activity.accessibility}
          </p>
          <p className="activity__desc">
            <b>Duration (hrs/mins/days): </b>
            {activity.duration}
          </p>
          <p className="activity__desc">
            <b>Kid Friendly: </b>
            {activity.kidFriendly ? "yes" : "no"}
          </p>
          <p className="activity__desc link">
            <b>Link: </b>
            <a href={activity.link}>Click for more details</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
