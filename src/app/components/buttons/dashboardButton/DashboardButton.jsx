import { React } from 'react'
import PropTypes from 'prop-types'
import MainButton from '../mainButton/MainButton'

const DashboardButton = (props) => {
  const { children } = props

  return <MainButton {...props}>{children}</MainButton>
}

DashboardButton.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  radius: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  width: PropTypes.string,
}

DashboardButton.defaultProps = {
  background: null,
  fontSize: '1rem',
  height: '3rem',
  onClick: null,
  radius: '5rem',
  type: 'primary',
  width: '9rem',
}

export default DashboardButton
