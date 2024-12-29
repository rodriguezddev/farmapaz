import React from 'react'
import PropTypes from 'prop-types'
import CustomTextField from './styles'

const MainInput = (props) => (
  <CustomTextField
    {...props}
  />
)

MainInput.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  radius: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
}

MainInput.defaultProps = {
  align: 'left',
  disabled: false,
  fontSize: '1.12rem',
  height: '4.1rem',
  name: null,
  onClick: null,
  onChange: null,
  placeholder: null,
  radius: '2.8rem',
  value: '',
  width: '27.8rem',
}

export default MainInput
