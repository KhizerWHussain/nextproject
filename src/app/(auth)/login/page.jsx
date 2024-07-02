import React from 'react'
import { handleGithubLogin } from '@/lib/actions'
import styles from './login.module.css'
import LoginForm from './../../../components/LoginForm/index'

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
