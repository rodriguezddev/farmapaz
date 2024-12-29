import {
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom'
import { GlobalSpinner } from '../components/spinners'
import SignUp from './SignUp'
import ProtectedRoute from '../auth/ProtectedRoute'
import Login from './Login/Login'
import ErrorDialog from '../components/dialogs/errorDialog/ErrorDialog'
import SuccessDialog from '../components/dialogs/successDialog/SuccessDialog'
import RecoverPassword from './RecoverPassword'
import Home from './Home/Home'
import { routes } from '../constants/routesConstants'

const Routes = () => {

  return (
    <>
      <SuccessDialog />
      <ErrorDialog />
      <GlobalSpinner />
      <ReactRoutes>
        <Route path={routes.home} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.recoverPassword} element={<RecoverPassword />} />
        <Route element={<ProtectedRoute />}>
        <Route path={routes.dashboard} element={<Home />} />
        </Route>
      </ReactRoutes>
    </>
  )
}

export default Routes
