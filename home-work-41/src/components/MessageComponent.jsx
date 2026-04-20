import { use } from "react";

function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);

  return (
    <div className="card">
      <h2>Message from server</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageComponent;
