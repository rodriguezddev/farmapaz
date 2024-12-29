import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const CustomButton = styled(Button)(
  ({
    background,
    fontSize,
    fontWeight,
    height,
    radius,
    theme,
    type,
    width,
  }) => ({
    backgroundColor: `${background || theme.palette.primary.main}`,
    borderRadius: `${radius}`,
    boxShadow: '0px 5px 16px 0px rgba(8, 15, 52, 0.06)',
    color: `${
      type !== 'secondary'
        ? theme.palette.common.white
        : theme.palette.primary.main
    }`,
    cursor: 'pointer',
    fontSize: `${fontSize}`,
    fontWeight: `${fontWeight}`,
    height: `${height}`,
    lineHeight: '1.5rem',
    padding: '0.5rem',
    textTransform: 'none',
    width: `${width}`,
    '&:hover': {
      backgroundColor: `${background || theme.palette.primary.main}`,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.common.greyLight,
    },
  }),
)

export default CustomButton
