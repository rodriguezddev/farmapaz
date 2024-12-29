import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { handleSetSuccessMessage } from '../successMessage/successMessageSlice'
import { messageSuccess } from '../../../constants/messageSuccess'
import httpService from '../../../services/apiServices/HttpService'

const initialState = {
  user: {},
  partnerCode: '',
  loggedIn: false,
  isUrlActive: false,
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await httpService.post('/api/auth/local/register?populate=role', data)

    return response
  } catch (error) {
    const message = error

    return thunkAPI.rejectWithValue(message)
  }
})

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const response = await httpService.post('/auth/sign-up', data)

      return {
        data: { ...response.data, password: data.password },
      }
    } catch (error) {
      const message = error

      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (data, thunkAPI) => {
    try {
      const response = await httpService.patch('/auth/me/update', data)

      thunkAPI.dispatch(handleSetSuccessMessage(messageSuccess.default))

      return response
    } catch (error) {
      const message = error

      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async (params, thunkAPI) => {
    try {
      const response = await httpService.post('/auth/reset-password', params)

      thunkAPI.dispatch(handleSetSuccessMessage(messageSuccess.recoverPassword))

      return response
    } catch (error) {
      const message = error

      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await httpService.post('/auth/log-out')

    return response
  } catch (error) {
    const message = error

    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.user = {}
      state.loggedIn = false

    },
    getUserInfo: (state, action) => {
      state.user = action.payload
      state.loggedIn = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user.token = action.payload.data.access_token
      state.loggedIn = true
    })

    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.data
    })

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload.data }
    })

    builder.addCase(logout.fulfilled, (state) => {
      state.user = {}
      state.loggedIn = false
    })
  },
})

export const auth = (state) => state.auth

export const { resetState, getUserInfo } = authSlice.actions

export default authSlice.reducer
