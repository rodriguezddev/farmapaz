import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Grid, IconButton, Typography, useMediaQuery,
} from '@mui/material'
import PropTypes from 'prop-types'
import BackButtonIcon from '../../../assets/images/back-button.svg'
import theme from '../../../themes/theme'

const BackButton = (props) => {
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')
  const {
    color, fontWeight, fontSize, goTo, text,
  } = props

  return (
    <Grid container justify='flex-start'>
      <Grid
        data-testid='back-button'
        item
        lg={2}
        onClick={goTo || (() => navigate(-1))}
        sx={{ cursor: 'pointer' }}
        xs={6}
      >
        <IconButton aria-label='back' color={color}>
          <img alt='Back' src={BackButtonIcon} width={matches ? 28 : 26} />
        </IconButton>
        <Typography
          color={color}
          display='inline'
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}

BackButton.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  goTo: PropTypes.func,
  text: PropTypes.string,
}

BackButton.defaultProps = {
  color: theme.palette.common.greyDark,
  fontSize: '1rem',
  fontWeight: 400,
  goTo: null,
  text: 'Regresar',
}

export default BackButton
