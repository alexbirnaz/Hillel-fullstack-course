import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../model/loadsSlice";
import LoadCard from "./LoadCard";

function LoadsList() {
  const { items, filter } = useSelector((state) => state.loads);
  const dispatch = useDispatch();

  const filteredLoads = items.filter(
    (load) =>
      load.origin.toLowerCase().includes(filter.toLowerCase()) ||
      load.destination.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="loads-list">
      <input
        type="text"
        placeholder="Search by city..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className="search"
      />
      {filteredLoads.length === 0 ? (
        <p className="no-loads">No loads found</p>
      ) : (
        filteredLoads.map((load) => <LoadCard key={load.id} load={load} />)
      )}
    </div>
  );
}

export default LoadsList;
