import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken(state, action : PayloadAction<any>) {
      if (action.payload) {
        state.token = action.payload;
      }
    },
    clearToken(state) {
      state.token = null;
    },
    setAuthState(state,  action : PayloadAction<any>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { saveToken, clearToken, setAuthState } = auth.actions;
export default auth.reducer;
