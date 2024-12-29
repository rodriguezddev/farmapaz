import { isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit'
import { resetState } from '../slices/auth/authSlice'
import { handleLoading, handleNotLoading } from '../slices/loading/loadingSlice'
import { handleSetError } from '../slices/error/errorSlice'

export const storeQueryLogger = ({ dispatch }) => (next) => (action) => {
  if (isRejectedWithValue(action)) {

    if (action?.payload?.status === 401) {
      dispatch(resetState())
    }

    if (action?.payload?.status !== undefined || (action.error && action.meta.arg !== undefined)) {
      dispatch(handleSetError(action?.payload))
    }

    dispatch(handleNotLoading())
  }

  if (isPending(action)) {
    dispatch(handleLoading())
  }

  if (isFulfilled(action)) {
    dispatch(handleNotLoading())
  }

  return next(action)
}
