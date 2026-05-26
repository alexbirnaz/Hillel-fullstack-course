import { useDispatch } from "react-redux";
import { FaMapMarkerAlt, FaTruck, FaTrash } from "react-icons/fa";
import { deleteLoad, updateStatus } from "../model/loadsSlice";
import { toast } from "react-toastify";

function LoadCard({ load }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteLoad(load.id));
    toast.error("Load deleted");
  };

  const handleStatusChange = () => {
    const newStatus = load.status === "available" ? "in-transit" : "delivered";
    dispatch(updateStatus({ id: load.id, status: newStatus }));
    toast.success(`Status changed to ${newStatus}`);
  };

  return (
    <div className={`load-card ${load.status}`}>
      <div className="route">
        <span>
          <FaMapMarkerAlt /> {load.origin}
        </span>
        <span className="arrow">→</span>
        <span>
          <FaMapMarkerAlt /> {load.destination}
        </span>
      </div>
      <div className="details">
        <span>{load.distance} miles</span>
        <span>{load.weight.toLocaleString()} lbs</span>
        <span className="price">${load.price}</span>
      </div>
      <div className="status-row">
        <span className={`status ${load.status}`}>{load.status}</span>
        <div className="actions">
          {load.status !== "delivered" && (
            <button onClick={handleStatusChange}>
              <FaTruck />
            </button>
          )}
          <button onClick={handleDelete} className="delete">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoadCard;
