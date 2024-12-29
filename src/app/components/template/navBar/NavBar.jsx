import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import items from './items'
import CustomListItemButton from './styles'
import LogoDefault from '../../../assets/images/logo-sf.png'
import theme from '../../../themes/theme'
import Icon from './items/Icon'
import { logout } from '../../../redux/slices/auth/authSlice'


const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()


  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.blueLight,
        minHeight: '100%',
        overflow: 'auto',
        padding: '3rem 0.5rem 0rem',
      }}
    >
      <Box px={4}>
        <img alt='logo' height={70} src={LogoDefault} width={100} />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        sx={{ height: '85%' }}
      >
        <List sx={{ marginTop: '2rem' }}>
          {items?.map((item) => (
            <ListItem
              id={`drawer-item-${item.id}`}
              key={item.title}
              onClick={() => navigate(`dashboard${item.href}`)}
              sx={{
                color: 'primary.main',
                margin: '0.5rem 0',
                px: '0.5rem',
                paddingBottom: '0',
              }}
            >
              <CustomListItemButton>
                <ListItemIcon
                  sx={{
                    minWidth: '2.5rem',
                  }}
                >
                  <Icon
                    name={item.id}
                    selected={
                      location.pathname.includes(item.href) && item.href !== '/'
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '1.12rem',
                      fontWeight:
                        location.pathname.includes(item.href)
                        && (item.href !== '/' ? 600 : 400),
                    },
                  }}
                />
              </CustomListItemButton>
            </ListItem>
          ))}
        </List>
        <List
          sx={{
            alignItems: 'flex-end',
            display: 'flex',
            flexDirection: 'row',
            height: '10%',
          }}
        >
          <CustomListItemButton>
            <ListItem
              data-testid='navbar-logout'
              onClick={() => dispatch(logout())}
              sx={{
                color: 'primary.main',
                margin: '0.5rem 0',
                px: '0.5rem',
                paddingBottom: '0',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: '2.5rem',
                }}
              >
                <ExitToAppIcon color='primary' />
              </ListItemIcon>
              <ListItemText
                primary='Cerrar sesión'
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '1rem',
                  },
                }}
              />
            </ListItem>
          </CustomListItemButton>
        </List>
      </Box>
    </Box>
  )
}

export default NavBar
