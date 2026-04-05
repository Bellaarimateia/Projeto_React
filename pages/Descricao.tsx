import { Link } from 'react-router';
import styles from '../App.Module.css'

export function Descricao(){
    return(
        <>
            <Link to='/'>
                <button>Retornar</button>
            </Link>
        </>
    );
}