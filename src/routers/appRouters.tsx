import React, { ReactElement, useContext } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import { AuthContext } from '../contexts/AuthContext'
import AuthLayout from '../layouts/AuthLayout'
import { Loader } from '../shared'

const LoginPage = React.lazy(() => import('../pages/login/Login'))
const LogoutPage = React.lazy(() => import('../pages/login/Logout'))
const DashboardPage = React.lazy(() => import('../pages/dashboard/Dashboard'))
const StudentListPage = React.lazy(
  () => import('../pages/students/studentList/StudentList')
)
type AuthGuardProps = {
  children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
  const authContext = useContext(AuthContext)

  if (authContext?.loading) {
    return <Loader />
  }

  if (!authContext?.user) {
    return <Navigate to="/auth" />
  }

  return children
}

const appRouter = () =>
  createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: '/auth',
          element: <LoginPage />
        },
        {
          path: '/logout',
          element: <LogoutPage />
        },
        {
          element: (
            <AuthGuard>
              <AuthLayout />
            </AuthGuard>
          ),
          children: [
            {
              path: '/',
              element: <DashboardPage />
            },
            {
              path: '/users',
              element: <StudentListPage />
            }
          ]
        }
      ]
    }
  ])

export default appRouter
