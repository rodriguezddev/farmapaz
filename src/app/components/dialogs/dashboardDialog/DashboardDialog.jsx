import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, useMediaQuery } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Check from '../../../assets/icons/check.svg'
import Warning from '../../../assets/icons/warning.svg'
import CustomDialog from './styles'
import DashboardButton from '../../buttons/dashboardButton/DashboardButton'
import theme from '../../../themes/theme'

const DashboardDialog = ({
  contentText,
  contentElement,
  fullWidth,
  handleCloseDialog,
  handleConfirm,
  maxWidth,
  open,
  redirect,
  textCancelButton,
  textConfirmButton,
  title,
  type,
}) => {
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')

  const confirm = () => {
    handleConfirm()
    if (redirect) {
      navigate(redirect)
    }
  }

  return (
    <Box>
      <CustomDialog
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        onClose={handleCloseDialog || confirm}
        open={open}
        PaperProps={{
          sx: {
            position: 'relative',
            overflow: 'visible',
          },
        }}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        {type !== 'hasIcon' && (
          <img
            alt='Check'
            src={type === 'confirm' || type === 'error' ? Warning : Check}
            style={{
              position: 'absolute',
              top: '0%',
              left: '50%',
              right: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            width={matches ? 55 : 110}
          />
        )}
        <DialogTitle
          id='alert-dialog-title'
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            mt: matches ? '2rm' : '3rem',
          }}
        >
          <Typography textAlign='center' variant='titleDashboardDialog'>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id='alert-dialog-description'
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography textAlign='center' variant='subtitleDialog'>
              {contentText}
            </Typography>
          </DialogContentText>
          <DialogContent>{contentElement}</DialogContent>
        </DialogContent>
        <DialogActions
          sx={{
            alignItems: 'center',
            flexDirection: matches ? 'column-reverse' : 'row',
            justifyContent: 'center',
          }}
        >
          {(type === 'confirm' || type === 'hasIcon') && (
            <DashboardButton
              data-testid='button-cancel-dialog'
              background={theme.palette.background.blueLight}
              onClick={handleCloseDialog}
              radius='0.5rem'
              sx={{
                boxShadow: 'none',
                color: theme.palette.primary.main,
                marginRight: matches ? '0rem' : '1rem',
                marginTop: matches ? '1rem' : '0rem',
              }}
              width='10.62rem'
            >
              {textCancelButton}
            </DashboardButton>
          )}
          <DashboardButton
            data-testid='button-confirm-dialog'
            onClick={confirm}
            radius='0.5rem'
            sx={{
              boxShadow: 'none',
              minWidth: type === 'accept' ? '10.12rem' : '10.62rem',
            }}
          >
            {textConfirmButton}
          </DashboardButton>
        </DialogActions>
      </CustomDialog>
    </Box>
  )
}

DashboardDialog.propTypes = {
  contentText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  contentElement: PropTypes.node,
  fullWidth: PropTypes.bool,
  handleCloseDialog: PropTypes.func,
  handleConfirm: PropTypes.func.isRequired,
  maxWidth: PropTypes.string,
  open: PropTypes.bool.isRequired,
  redirect: PropTypes.string,
  textCancelButton: PropTypes.string,
  textConfirmButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['accept', 'confirm', 'error', 'hasIcon']).isRequired,
}

DashboardDialog.defaultProps = {
  contentText: null,
  contentElement: null,
  fullWidth: false,
  handleCloseDialog: null,
  maxWidth: 'sm',
  redirect: null,
  textCancelButton: '',
}

export default DashboardDialog
