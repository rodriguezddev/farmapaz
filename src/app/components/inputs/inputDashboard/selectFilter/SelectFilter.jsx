import React from 'react'
import PropTypes from 'prop-types'
import { Box, Select } from '@mui/material'
import theme from '../../../../themes/theme'
import CustomSelectFilter from './styles'

const SelectFilter = (props) => {
  const { children } = props

  return (
    <Box>
      <Select {...props} displayEmpty input={<CustomSelectFilter />}>
        {children}
      </Select>
    </Box>
  )
}

SelectFilter.propTypes = {
  border_color: PropTypes.string,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
}

SelectFilter.defaultProps = {
  border_color: theme.palette.primary.main,
  fontSize: '1rem',
  height: '2.5rem',
  multiple: false,
  onChange: null,
  value: '',
  width: '6rem',
}

export default SelectFilter
