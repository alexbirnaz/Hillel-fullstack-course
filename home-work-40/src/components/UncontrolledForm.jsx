import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const agreeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const agree = agreeRef.current.checked;
    alert(`Name: ${name}, Email: ${email}, Agree: ${agree}`);
  };

  return (
    <div className="card">
      <h2>Uncontrolled Form</h2>
      <p>Values in DOM (useRef)</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Enter name" />
        <input type="email" ref={emailRef} placeholder="Enter email" />
        <label className="checkbox">
          <input type="checkbox" ref={agreeRef} />I agree
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
