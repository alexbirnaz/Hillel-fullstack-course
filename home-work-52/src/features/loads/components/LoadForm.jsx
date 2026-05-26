import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addLoad } from "../model/loadsSlice";
import { toast } from "react-toastify";

function LoadForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    origin: "",
    destination: "",
    distance: "",
    weight: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLoad = {
      id: Date.now(),
      origin: form.origin,
      destination: form.destination,
      distance: Number(form.distance),
      weight: Number(form.weight),
      price: Number(form.price),
      status: "available",
    };

    dispatch(addLoad(newLoad));
    toast.success("Load added!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="load-form">
      <input
        name="origin"
        placeholder="Origin (e.g. Los Angeles, CA)"
        value={form.origin}
        onChange={handleChange}
        required
      />
      <input
        name="destination"
        placeholder="Destination (e.g. Phoenix, AZ)"
        value={form.destination}
        onChange={handleChange}
        required
      />
      <input
        name="distance"
        type="number"
        placeholder="Distance (miles)"
        value={form.distance}
        onChange={handleChange}
        required
      />
      <input
        name="weight"
        type="number"
        placeholder="Weight (lbs)"
        value={form.weight}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price ($)"
        value={form.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Load</button>
    </form>
  );
}

export default LoadForm;
