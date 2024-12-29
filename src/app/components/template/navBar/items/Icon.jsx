import PropTypes from 'prop-types'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PersonIcon from '@mui/icons-material/Person'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'


const Icon = ({ name, selected }) => {
  const Icons = {

    products: selected ? (
      <LocalMallIcon color='primary' />
    ) : (
      <LocalMallOutlinedIcon color='primary' />
    ),
    profile: selected ? (
      <PersonIcon color='primary' />
    ) : (
      <PersonOutlineOutlinedIcon color='primary' />
    ),
    users: selected ? (
      <PersonIcon color='primary' />
    ) : (
      <PersonOutlineOutlinedIcon color='primary' />
    ),
  }

  return Icons[name] ?? null
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default Icon
