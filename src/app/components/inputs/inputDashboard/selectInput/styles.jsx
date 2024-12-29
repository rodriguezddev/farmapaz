import { InputBase, styled } from '@mui/material'
import theme from '../../../../themes/theme'

const CustomSelect = styled(InputBase)(
  ({
    fontSize, height, radius, width,
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
    '& .MuiInputBase-input': {
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

export default CustomSelect
