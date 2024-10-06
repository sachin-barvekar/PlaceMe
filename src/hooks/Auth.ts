import { useState, useEffect } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  browserLocalPersistence,
  User
} from 'firebase/auth'
import { notifyError, notifySuccess } from '../utils'
import { auth } from '../config/firebase'

const allowedEmails = ['sachinbarvekar2003@gmail.com', 'maheshgaikwad3222@gmail.com', 'omkaryc03@gmail.com']

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const useAuth = (): AuthContextType => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (allowedEmails?.includes(currentUser?.email ?? '')) {
        setUser(currentUser)
      } else {
        setUser(null)
        localStorage.clear()
      }
      setLoading(false)
    })

    auth.setPersistence(browserLocalPersistence).catch((error) => {
      // eslint-disable-next-line
      console.error('Persistence failed:', error)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const userData: User = result.user
      if (allowedEmails.includes(userData.email ?? '')) {
        notifySuccess('Login Success')
        setUser(userData)
      } else {
        notifyError('Unauthorized email, login failed')
        await signOut(auth)
      }
    } catch (error) {
      notifyError('Login failed')
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      localStorage.clear()
    } catch (error) {
      notifyError('Logout failed')
    }
  }

  return {
    user,
    loading,
    login,
    logout
  }
}

export default useAuth
