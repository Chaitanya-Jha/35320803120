import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTrain = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios
      .get(`/trains/${id}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching train with ID ${id}:`, error);
      });
  }, [id]);

  return (
    <div>
      {train ? (
        <div>
          <h2>{train.name}</h2>
          <p>Departure: {train.departure}</p>
          <p>Arrival: {train.arrival}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;
