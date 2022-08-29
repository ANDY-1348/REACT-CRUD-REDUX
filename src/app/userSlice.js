const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return [...state, ...action.payload];
    },

    updateUser(state, action) {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { setUsers, updateUser } = userSlice.actions;
export default userSlice.reducer;
