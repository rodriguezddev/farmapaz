
import { useMediaQuery } from '@mui/material'
import CheckComplete from '../images/check-complete.svg'

const CheckCompleteIcon = () => {
  const matches = useMediaQuery('(max-width:600px)')

  return (
    <img
      alt='check complete'
      src={CheckComplete}
      width={matches ? 16 : 20}
    />
  )
}

export default CheckCompleteIcon
