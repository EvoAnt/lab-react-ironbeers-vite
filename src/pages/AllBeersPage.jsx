import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [ beers, setBeers ] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return(
        <div key={beer._id}>
          <img className="img" src={beer.image_url} alt="beer image" />
          <h1>{beer.name}</h1>
          <h6>{beer.tagline}</h6>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>
        )
      })}
    </div>
  );
}

export default AllBeersPage;
