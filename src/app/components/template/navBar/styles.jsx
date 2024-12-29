import { ListItemButton, styled } from '@mui/material'

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    color: theme.palette.common.white,
    height: '2.81rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    width: '14.25rem',
  },
}))

export default CustomListItemButton
