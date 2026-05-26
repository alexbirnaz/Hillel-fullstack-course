import { createSlice } from "@reduxjs/toolkit";

const initialLoads = [
  {
    id: 1,
    origin: "Los Angeles, CA",
    destination: "Phoenix, AZ",
    distance: 370,
    weight: 25000,
    price: 1200,
    status: "available",
  },
  {
    id: 2,
    origin: "Houston, TX",
    destination: "Dallas, TX",
    distance: 240,
    weight: 18000,
    price: 800,
    status: "available",
  },
  {
    id: 3,
    origin: "Chicago, IL",
    destination: "Detroit, MI",
    distance: 280,
    weight: 30000,
    price: 950,
    status: "in-transit",
  },
];

const loadsSlice = createSlice({
  name: "loads",
  initialState: {
    items: initialLoads,
    filter: "",
  },
  reducers: {
    addLoad: (state, action) => {
      state.items.push(action.payload);
    },
    deleteLoad: (state, action) => {
      state.items = state.items.filter((load) => load.id !== action.payload);
    },
    updateStatus: (state, action) => {
      const load = state.items.find((l) => l.id === action.payload.id);
      if (load) load.status = action.payload.status;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addLoad, deleteLoad, updateStatus, setFilter } =
  loadsSlice.actions;
export default loadsSlice.reducer;
