import { FaHeart, FaStar, FaTrash, FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

function IconButtons() {
  return (
    <div className="buttons">
      <button onClick={() => toast.success("Liked!")}>
        <FaHeart /> Like
      </button>
      <button onClick={() => toast.info("Added to favorites!")}>
        <FaStar /> Favorite
      </button>
      <button onClick={() => toast.error("Deleted!")}>
        <FaTrash /> Delete
      </button>
      <button onClick={() => toast.warning("Are you sure?")}>
        <FaCheck /> Confirm
      </button>
    </div>
  );
}

export default IconButtons;
