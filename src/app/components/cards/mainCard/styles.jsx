import { Card, styled } from '@mui/material'

const CustomCard = styled(Card)(
  ({
    border, height, padding, bottom, radius, shadow, width,
  }) => ({
    border,
    borderRadius: radius,
    boxShadow: shadow,
    height: `${height}`,
    padding,
    width: `${width}`,
    '& .MuiCardContent-root': {
      '&:last-child': {
        paddingBottom: bottom,
      },
    },
  }),
)

export default CustomCard
