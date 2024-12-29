import { TextField, styled } from '@mui/material'

const CustomTextArea = styled(TextField)(
  ({
    fontSize, height, radius, theme, width,
  }) => ({
    background: theme.palette.background.white,
    border: `0.063rem solid ${theme.palette.secondary.main}`,
    borderRadius: radius,
    boxShadow: theme.palette.common.shadowCard,
    boxSizing: 'border-box',
    color: theme.palette.common.greyDark,
    fontSize: `${fontSize}`,
    height: `${height}`,
    padding: '0.75rem 1rem',
    width: `${width}`,
    '&.Mui-focused': {
      background: theme.palette.common.white,
    },
    '& .Mui-error': {
      border: `0.13rem solid ${theme.palette.error.main}`,
      borderRadius: radius,
      color: theme.palette.error.main,
    },
  }),
)

export default CustomTextArea
