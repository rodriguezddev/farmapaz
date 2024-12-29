import React from 'react'
import PropTypes from 'prop-types'
import CustomTextArea from './styles'

const TextArea = (props) => {
  const {
    disabled, onClick, rows, ...rest
  } = props

  return (
    <CustomTextArea
      disabled={disabled}
      InputProps={{ disableUnderline: true }}
      multiline
      rows={rows}
      variant='standard'
      {...rest}
    />
  )
}

TextArea.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  radius: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  width: PropTypes.string,
}

TextArea.defaultProps = {
  align: 'left',
  disabled: false,
  fontSize: '1.12rem',
  height: '4.1rem',
  name: null,
  onClick: null,
  onChange: null,
  placeholder: null,
  radius: '0.63rem',
  rows: 5,
  value: '',
  width: '16rem',
}

export default TextArea
