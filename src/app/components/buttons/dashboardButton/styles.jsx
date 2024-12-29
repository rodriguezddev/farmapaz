import { styled } from '@mui/material/styles'
import MainButton from '../mainButton/MainButton'

const CustomButton = styled(MainButton)(
  ({
    background, fontSize, height, radius, theme, type, width,
  }) => ({
    backgroundColor: `${background || theme.palette.primary.main}`,
    borderRadius: `${radius}`,
    boxShadow: ' 0px 8px 22px rgba(74, 58, 255, 0.26);',
    color: `${
      type !== 'secondary'
        ? theme.palette.common.white
        : theme.palette.primary.main
    }`,
    cursor: 'pointer',
    fontSize: `${fontSize}`,
    fontWeight: '700',
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
