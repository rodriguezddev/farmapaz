
import DashboardDialog from '../dashboardDialog/DashboardDialog'
import { handleHideSuccessMessage } from '../../../redux/slices/successMessage/successMessageSlice'
import { useDispatch, useSelector } from 'react-redux'

const SuccessDialog = () => {
  const dispatch = useDispatch()
  const { isSuccess, message } = useSelector((state) => state.successMessage)

  const handleCloseDialogSuccessMessage = () => {
    dispatch(handleHideSuccessMessage())
  }

  return (
    isSuccess && (
      <DashboardDialog
        contentText={message?.content}
        handleConfirm={handleCloseDialogSuccessMessage}
        redirect={message?.redirectTo}
        open={isSuccess}
        textConfirmButton={message?.button || 'Cerrar'}
        title={message?.title}
        type='accept'
      />
    )
  )
}

export default SuccessDialog
