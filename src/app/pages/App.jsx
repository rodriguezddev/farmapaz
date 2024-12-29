import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { getUserInfo } from '../redux/slices/auth/authSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = {
      email: '',
      token: '',
      role: '',
      id: '',
    }

    if (user) {
      dispatch(getUserInfo(user))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
