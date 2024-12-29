import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton } from '@mui/material'
import MainInput from '../../mainInput/MainInput'

const InputDashboard = (props) => {
  const {
    hiddenIcon, Icon, iconColor, margin, onClick, ...rest
  } = props

  return (
    <Box m={margin}>
      <MainInput
        endAdornment={
          hiddenIcon && (
            <IconButton edge='start' onClick={onClick}>
              {Icon && <Icon sx={{ color: iconColor }} />}
            </IconButton>
          )
        }
        {...rest}
      />
    </Box>
  )
}

InputDashboard.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  fontSize: PropTypes.string,
  height: PropTypes.string,
  hiddenIcon: PropTypes.bool,
  Icon: PropTypes.oneOfType([PropTypes.object]),
  iconColor: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  radius: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
}

InputDashboard.defaultProps = {
  align: 'left',
  fontSize: '1.12rem',
  iconColor: 'common.greyDark',
  Icon: null,
  height: '3.12rem',
  hiddenIcon: false,
  margin: '0',
  name: null,
  onClick: null,
  onChange: null,
  placeholder: null,
  radius: '0.62rem',
  value: '',
  width: '15rem',
}

export default InputDashboard
