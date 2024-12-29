import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { handleHideError } from '../../../redux/slices/error/errorSlice'
import DashboardDialog from '../dashboardDialog/DashboardDialog'

const ErrorDialog = () => {
  const dispatch = useDispatch()
  const { codeError, isError, message } = useSelector((state) => state.error)

  const handleCloseError = () => {
    dispatch(handleHideError())
  }

  return (
    isError && (
      <DashboardDialog
        contentText={`${message} - código: ${codeError || ''}`}
        handleCloseDialog={handleCloseError}
        handleConfirm={handleCloseError}
        open={isError}
        textConfirmButton='Cerrar'
        title='Lo sentimos...'
        type='error'
      />
    )
  )
}

export default ErrorDialog
