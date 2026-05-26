import { useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

function IdleTimer() {
  const [status, setStatus] = useState("Active");

  const onIdle = () => {
    setStatus("Idle");
    toast.warning("You are idle!");
  };

  const onActive = () => {
    setStatus("Active");
    toast.success("Welcome back!");
  };

  useIdleTimer({
    timeout: 5000,
    onIdle,
    onActive,
  });

  return (
    <div className="idle-status">
      <p>
        Status: <strong>{status}</strong>
      </p>
      <p className="hint">Wait 5 seconds without moving mouse</p>
    </div>
  );
}

export default IdleTimer;
