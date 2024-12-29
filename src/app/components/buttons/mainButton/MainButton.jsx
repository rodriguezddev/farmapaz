import { React } from 'react'
import PropTypes from 'prop-types'
import CustomButton from './styles'

const MainButton = (props) => {
  const { children } = props

  return <CustomButton {...props}>{children}</CustomButton>
}

MainButton.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  height: PropTypes.string,
  onClick: PropTypes.func,
  radius: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  width: PropTypes.string,
}

MainButton.defaultProps = {
  background: null,
  fontSize: '1rem',
  fontWeight: 700,
  height: '3rem',
  onClick: null,
  radius: '5rem',
  type: 'primary',
  width: '9rem',
}

export default MainButton
