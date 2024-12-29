import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { storeQueryLogger } from './middleware/middleware'
import authReducer from './slices/auth/authSlice'
import successMessageReducer from './slices/successMessage/successMessageSlice'
import loadingReducer from './slices/loading/loadingSlice'
import errorReducer from './slices/error/errorSlice'

const reducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  successMessage: successMessageReducer,
})

const rootReducer = (state, action) => {
  let rootState = state

  if (
    action.type === 'auth/resetState'
    || action.type === 'auth/logout/fulfilled'
  ) {
    rootState = undefined
  }

  return reducers(rootState, action)
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading', 'error', 'successMessage', 'reports', 'campaign'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(storeQueryLogger),
})

export default store
