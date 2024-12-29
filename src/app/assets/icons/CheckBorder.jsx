import { useMediaQuery } from '@mui/material'
import CheckBorder from '../images/check-border.svg'

const CheckBorderIcon = () => {
  const matches = useMediaQuery('(max-width:600px)')

  return (
    <img
      alt='check complete'
      src={CheckBorder}
      width={matches ? 16 : 20}
    />
  )
}

export default CheckBorderIcon
