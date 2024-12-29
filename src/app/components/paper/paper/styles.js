import { Paper, styled } from '@mui/material'

const CustomPaper = styled(Paper)(({ radius, shadow }) => ({
  borderRadius: radius,
  boxShadow: shadow,
}))

export default CustomPaper
