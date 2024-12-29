import { InputBase, styled } from '@mui/material'

const CustomTextField = styled(InputBase)(
  ({
    align, fontSize, height, radius, theme, width,
  }) => ({
    background: theme.palette.background.white,
    border: `0.063rem solid ${theme.palette.secondary.main}`,
    borderRadius: radius,
    boxShadow: theme.palette.common.shadowCard,
    boxSizing: 'border-box',
    color: theme.palette.common.greyDark,
    fontSize: `${fontSize}`,
    height: `${height}`,
    padding: '0.5rem 1rem',
    width: `${width}`,
    '& .MuiInputBase-input': {
      textAlign: `${align}`,
      fontSize: `${fontSize}`,
    },
    '&.Mui-focused': {
      background: theme.palette.background.white,
    },
    '&.Mui-error': {
      borderColor: theme.palette.error.main,
      color: theme.palette.error.main,
    },
  }),
)

export default CustomTextField
