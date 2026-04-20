import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Agree: ${agree}`);
  };

  return (
    <div className="card">
      <h2>Controlled Form</h2>
      <p>Values in React state (useState)</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="checkbox">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>
        Live: {name} | {email}
      </p>
    </div>
  );
}

export default ControlledForm;
