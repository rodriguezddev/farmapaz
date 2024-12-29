import PropTypes from 'prop-types'
import { CardContent } from '@mui/material'
import CustomCard from './styles'
import theme from '../../../themes/theme'

const Card = (props) => {
  const { children, ...rest } = props

  return (
    <CustomCard {...rest}>
      <CardContent>{children}</CardContent>
    </CustomCard>
  )
}

Card.propTypes = {
  border: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  padding: PropTypes.string,
  bottom: PropTypes.string,
  radius: PropTypes.string,
  shadow: PropTypes.string,
  width: PropTypes.string,
}

Card.defaultProps = {
  border: 'none',
  height: '70%',
  padding: '4rem 0rem',
  bottom: '1.5rem',
  radius: '1rem',
  shadow: theme.palette.common.shadowCard,
  width: null,
}

export default Card
