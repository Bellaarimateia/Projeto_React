import { Link } from 'react-router'
import styles from './App.module.css'

export function Home() {
  return (
    <div className={styles['home-container']}>
      <h3 className={styles['home-title']}>PROJETO REACT</h3>

      <div className={styles['button-group']}>
        <Link to="/cadastro">
          <button className={styles['home-button']}>Cadastro</button>
        </Link>

        <Link to="/descricao">
          <button className={styles['home-button']}>Descrição</button>
        </Link>
      </div>
    </div>
  )
}