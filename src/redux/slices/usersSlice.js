import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    data: [],
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const uniqueId = Date.now().toString();
      const newUser = { id: uniqueId, ...action.payload };
      state.value.data.push(newUser);
    },
    updateUser: (state, action) => {
      const { id, user } = action.payload;
      const index = state.value.data.findIndex((u) => u.id === id);
      if (index !== -1) {
        state.value.data[index] = user;
      }
    },
  },
});

export const { addUsers, updateUser } = usersSlice.actions;
export default usersSlice.reducer;