/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import CustomPaper from './styles'
import theme from '../../../themes/theme'

const Paper = (props) => {
  const { children } = props

  return <CustomPaper {...props}>{children}</CustomPaper>
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  radius: PropTypes.string,
  shadow: PropTypes.string,
}

Paper.defaultProps = {
  radius: '2.8rem',
  shadow: theme.palette.common.shadowPaper,
}

export default Paper
