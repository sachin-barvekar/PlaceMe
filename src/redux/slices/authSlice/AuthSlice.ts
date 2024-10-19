import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: string | null;
  role: 'admin' | 'student' | 'recruiter' | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  role: null,
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true
    },
    loginSuccess(
      state,
      action: PayloadAction<{
        user: string,
        role: 'admin' | 'student' | 'recruiter' | null
      }>
    ) {
      state.user = action.payload.user
      state.role = action.payload.role
      state.loading = false
    },
    loginFailure(state) {
      state.loading = false
    },
    logout(state) {
      state.user = null
      state.role = null
      state.loading = false
    }
  }
})

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions
export default authSlice
