import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {...formData}

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log(response);
        navigate("/");
        setFormData({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
      </label>
      <label>
        Tagline:
        <input
          type="text"
          name="tagline"
          value={formData.tagline}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))}
        ></textarea>
      </label>
      <label>
        First Brewed:
        <input
          type="text"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
      </label>

      <label>
        Brewer's Tips:
        <input
          type="text"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
      </label>

      <label>
        Attenuation Level:
        <input
          type="number"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))}
        />
      </label>

      <label>
        Contributed By:
        <input
          type="text"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={(e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
      </label>

      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
