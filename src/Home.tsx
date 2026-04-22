import { Link } from 'react-router'
import styles from './App.module.css'
import react from './assets/react.png'

export function Home() {
  return (
    <div className={styles['home-container']}>
      <div className={styles['home-card']}>
        <img src={react} alt="Logo React" className={styles.foto} />

        <h1 className={styles['home-title']}>🚀 PROJETO REACT</h1>
        <p className={styles['home-subtitle']}>
          Bem-vindo ao nosso projeto. Escolha uma das opções abaixo para continuar.
        </p>

        <div className={styles['button-group']}>
          <Link to="/cadastro">
            <button className={styles['home-button']}>Cadastro</button>
          </Link>

          <Link to="/descricao">
            <button className={styles['home-button']}>Descrição</button>
          </Link>
        </div>
      </div>
    </div>
  )
}