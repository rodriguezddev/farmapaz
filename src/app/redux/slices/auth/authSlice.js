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
    const response = await httpService.post('/auth/log-in', data)

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

export const getUrlActive = createAsyncThunk(
  'auth/getUrlActive',
  async (params) => {
    try {
      const response = await fetch(params, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        mode: 'no-cors',
        'Content-Type': 'application/json',
        credentials: 'include',
      })

      if (response) {
        return true
      }

      return false
    } catch (err) {
      return false
    }
  },
)

export const validateCode = createAsyncThunk(
  'auth/validateCode',
  async (data, thunkAPI) => {
    const {
      auth: { user },
    } = thunkAPI.getState()
    const loginInfo = {
      email: user.email,
      password: user.password,
      partner_code: user.partner.code,
    }

    try {
      const response = await httpService.post('/auth/validate-otp', data)

      await thunkAPI.dispatch(
        getUrlActive(
          `https://${user.partner.code}${import.meta.env.REACT_APP_DOMAIN_BASE}`,
        ),
      )

      await thunkAPI.dispatch(login(loginInfo))

      return response
    } catch (error) {
      const message = error

      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getPartnerInfo = createAsyncThunk(
  'auth/me',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()

    try {
      const response = await httpService.getLogInfo(
        '/auth/me',
        state.auth.user.token,
      )

      return response
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

    builder.addCase(validateCode.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload.data }
    })

    builder.addCase(getUrlActive.fulfilled, (state, action) => {
      state.isUrlActive = action.payload
    })

    builder.addCase(getUrlActive.rejected, (state) => {
      state.isUrlActive = false
    })

    builder.addCase(getPartnerInfo.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload.data }
      state.partnerCode = action.payload.data.partner.code
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
