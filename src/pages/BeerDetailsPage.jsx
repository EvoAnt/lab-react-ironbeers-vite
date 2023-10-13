import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const [beer, setBeer] = useState();
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the beer details", error);
      });
  }, [beerId]);

  return (
    <>
      <div>
        {beer && (
          <div>
            <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <h5>{beer.first_brewed}</h5>
            <h6>{beer.attenuation_level}</h6>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BeerDetailsPage;
