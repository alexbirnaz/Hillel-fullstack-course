import { memo } from "react";

const ChildButton = memo(function ChildButton({ onClick, label }) {
  console.log(`ChildButton "${label}" rendered`);

  return <button onClick={onClick}>{label}</button>;
});

export default ChildButton;
