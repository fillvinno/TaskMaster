import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
  user: IUser,
  isAuth: boolean
  isLoading: boolean,
  error: string | null
}

const initialState: IUserState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    }
  }
})

export default userSlice.reducer