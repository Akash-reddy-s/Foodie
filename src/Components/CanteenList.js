import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CanteenList = () => {
  const [canteens, setCanteens] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/canteens/")
      .then(res => res.json())
      .then(data => setCanteens(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Select a Canteen</h1>
      {canteens.length === 0 ? (
        <p>Loading...</p>
      ) : (
        canteens.map(canteen => (
          <div key={canteen.id}>
            <button onClick={() => navigate(`/canteen/${canteen.id}`, { state: { canteen } })}>
              {canteen.name}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CanteenList;
