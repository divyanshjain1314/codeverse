import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    token: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.value = action.payload;
    },
    updateauth: (state, action) => {
      state.value = action.payload;
    },
    logOutauth: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { loginSuccess, updateauth, logOutauth } = authSlice.actions;
export default authSlice.reducer;