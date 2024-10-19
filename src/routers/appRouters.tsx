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
  children: ReactElement,
  allowedRoles?: string[]
}

function AuthGuard({ children, allowedRoles  }: AuthGuardProps) {
  const authContext = useContext(AuthContext)

  if (authContext?.loading) {
    return <Loader />
  }

  if (!authContext?.user) {
    return <Navigate to="/auth" />
  }

  if (allowedRoles && !allowedRoles.includes(authContext.role!)) {
    // Redirect if user doesn't have the required role
    return <Navigate to="/unauthorized" />
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
              element:  (
                <AuthGuard allowedRoles={['admin','student','recruiter']}>
                  <DashboardPage />
                </AuthGuard>
                )
            },
            {
              path: '/student',
              element: (
                <AuthGuard allowedRoles={['admin']}>
                  <StudentListPage />
                </AuthGuard>
              )
            }
          ]
        }
      ]
    }
  ])

export default appRouter
