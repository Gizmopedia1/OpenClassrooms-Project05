import './error404.scss'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className='error404'>
            <h1 className='h1-404'>404</h1>
            <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='return-home'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error404