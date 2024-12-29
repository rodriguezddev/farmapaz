import { useNavigate } from 'react-router-dom'
import {
  Box, Container, Grid, Typography,
} from '@mui/material'
import Logo from '../../assets/images/logo-sf.png'

import { routes } from '../../constants/routesConstants'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(routes.signup)
  }

  return (
    <Box width='100%'>
      <Container>
        <Grid
          alignItems='center'
          container
          direction='column'
          justifyContent='space-around'
        >
          <Grid item mt={16} xs={12}>
            <img alt='Logo Bamba' src={Logo} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
