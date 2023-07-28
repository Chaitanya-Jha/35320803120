import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get("/trains")
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all trains:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <a href={`/trains/${train.id}`}>{train.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
