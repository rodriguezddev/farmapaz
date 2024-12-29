import React from 'react'
import PropTypes from 'prop-types'
import CustomDrawer from './styles'

const MainDrawer = (props) => (
  <CustomDrawer {...props} />
)

MainDrawer.propTypes = {
  background: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

MainDrawer.defaultProps = {
  background: 'background.default',
  height: '100%',
  width: null,
}

export default MainDrawer
