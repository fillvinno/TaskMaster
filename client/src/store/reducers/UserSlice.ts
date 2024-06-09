import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserDto} from "../../../../server/dtos/user.dto.ts";

interface IUserState {
  user: UserDto | undefined,
  isAuth: boolean
  isLoading: boolean,
  error: string | null
}

const initialState: IUserState = {
  user: {} as UserDto,
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
    setUser(state, action: PayloadAction<UserDto | undefined>) {
      state.user = action.payload
    }
  }
})

export default userSlice.reducer