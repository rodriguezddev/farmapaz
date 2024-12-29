import { InputBase, styled } from '@mui/material'
import theme from '../../../../themes/theme'

const CustomSelectFilter = styled(InputBase)(
  ({
    border_color: borderColor, fontSize, height, width,
  }) => ({
    backgroundColor: theme.palette.common.white,
    border: `0.13rem solid ${theme.palette.primary.main}`,
    borderRadius: '0.3rem',
    borderColor,
    boxSizing: 'border-box',
    color: theme.palette.primary.main,
    fontSize: `${fontSize}`,
    fontWeight: 400,
    height: `${height}`,
    padding: '0.75rem 1rem',
    position: 'relative',
    width: `${width}`,
    '& .MuiInputBase-input': {
      '&.Mui-focused': {
        borderRadius: '0.63rem',
        borderColor: `${theme.palette.primary}`,
        boxShadow: `0 0 0 0.2rem ${theme.palette.common.shadow}`,
      },
    },
    '&.Mui-error': {
      borderColor: theme.palette.error.main,
      color: theme.palette.error.main,
    },
  }),
)

export default CustomSelectFilter
