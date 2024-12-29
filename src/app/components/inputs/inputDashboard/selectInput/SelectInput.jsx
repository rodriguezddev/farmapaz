import React from 'react'
import PropTypes from 'prop-types'
import { Select } from '@mui/material'
import CustomSelect from './styles'

const SelectInput = (props) => {
  const { children } = props

  return (
    <Select {...props} displayEmpty input={<CustomSelect />}>
      {children}
    </Select>
  )
}

SelectInput.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  radius: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  width: PropTypes.string,
}

SelectInput.defaultProps = {
  disabled: false,
  fontSize: '1.12rem',
  height: '3.12rem',
  multiple: false,
  name: null,
  onChange: null,
  placeholder: null,
  radius: '0.62rem',
  value: '',
  width: '15rem',
}

export default SelectInput
