import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar } from '../appBar'
import { MainDrawer } from '../drawer'
import NavBar from './navBar'
import theme from '../../themes/theme'
import { Paper } from '../paper'

const DashboardLayout = ({ children, window }) => {
  const container = window !== undefined && (() => window().document.body)
  const drawerWidth = '16rem'
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar drawer_width={drawerWidth} position='fixed'>
        <Toolbar sx={{ background: 'primary.main' }}>
          <IconButton
            aria-label='open drawer'
            color='inherit'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component='div' noWrap variant='h6'>
            Bamba
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        aria-label='mailbox folders'
        component='nav'
        sx={{ flexShrink: { sm: 0 }, width: { sm: drawerWidth } }}
      >
        <MainDrawer
          container={container}
          display={{ sm: 'none', xs: 'block' }}
          ModalProps={{
            keepMounted: true,
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          variant='temporary'
          width={drawerWidth}
        >
          <NavBar />
        </MainDrawer>
        <MainDrawer
          display={{ xs: 'none', sm: 'block' }}
          open
          variant='permanent'
          width={drawerWidth}
        >
          <NavBar />
        </MainDrawer>
      </Box>
      <Box
        component='main'
        sx={{
          bgcolor: theme.palette.background.blueLight,
          flexGrow: 1,
          minHeight: '100vh',
          p: 3,
        }}
      >
        <Toolbar sx={{ display: { sm: 'none' } }} />
        <Paper
          radius='1.2rem'
          shadow={theme.palette.common.shadowPaperDashboard}
          sx={{ minHeight: '92vh' }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
}

DashboardLayout.defaultProps = {
  window: undefined,
}

export default DashboardLayout
