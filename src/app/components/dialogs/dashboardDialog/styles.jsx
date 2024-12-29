import { styled } from '@mui/material/styles'
import { Dialog } from '@mui/material'

const CustomDialog = styled(Dialog)(() => ({
  zIndex: 1200,
  '& .MuiDialog-paper': {
    borderRadius: '1rem',
    padding: '1.31rem 1.31rem 2.75rem',
  },
}))

export default CustomDialog
