import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import DashboardLayout from '../components/template'
import { routes } from '../constants/routesConstants'

const ProtectedRoute = ({ children, redirectTo }) => {
  const { loggedIn } = useSelector((state) => state.auth)

  if (!loggedIn && typeof window !== 'undefined') {
    return <Navigate to={redirectTo} />
  }

  return (
    children ?? (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    )
  )
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
}

ProtectedRoute.defaultProps = {
  redirectTo: routes.login,
  children: undefined,
}

export default ProtectedRoute
