import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import styles from './App.module.css'

type User = {
  name: string
  email: string
  picture: string
}

export function Login_Google() {
  const [user, setUser] = useState<User | null>(null)

  function login(credentialResponse: { credential?: string }) {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<User>(credentialResponse.credential)
      setUser(decoded)
    }
  }

  function logout() {
    googleLogout()
    setUser(null)
  }

  return (
    <div className={styles.header}>
      <div className={styles.loginBox}>
        {!user ? (
          <GoogleLogin
            onSuccess={login}
            onError={() => console.error('Login falhou')}
            size="medium"
            shape="rectangular"
          />
        ) : (
          <div className={styles.userInfo}>
            <img
              src={user.picture}
              alt="Perfil"
              className={styles.profilePicture}
            />
            <span className={styles.userName}>{user.name}</span>
            <button onClick={logout} className={styles.logoutButton}>
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login_Google