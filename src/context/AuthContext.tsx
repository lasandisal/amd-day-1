import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { useLoader } from '@/hooks/useLoader'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/services/firebase'

export interface AppUser extends User{
  fullName?: string
}

interface AuthContextType {
  user: any | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType> ({
  user: null,
  loading: true
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { showLoader, hideLoader, isLoading } = useLoader()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    showLoader()
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      hideLoader()
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading: isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}
