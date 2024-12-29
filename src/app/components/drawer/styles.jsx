import { Drawer, styled } from '@mui/material'
import theme from '../../themes/theme'

const CustomDrawer = styled(Drawer)(
  ({
    background, display, width, height,
  }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: background,
      borderRight: 'none',
      boxSizing: 'border-box',
      height,
      width,
      zIndex: 99,
    },
    [theme.breakpoints.up('xs')]: {
      display: display.xs,
    },
    [theme.breakpoints.up('sm')]: {
      display: display.sm,
    },
  }),
)

export default CustomDrawer
