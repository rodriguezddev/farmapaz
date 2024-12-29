import React from 'react'
import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@mui/material'

const Spinner = ({ loading, colorSpinner }) => (
  <Backdrop
    open={loading}
    sx={{
      color: colorSpinner,
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    <CircularProgress color='inherit' />
  </Backdrop>
)

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  colorSpinner: PropTypes.string,
}

Spinner.defaultProps = {
  colorSpinner: 'primary.main',
}

export default Spinner
