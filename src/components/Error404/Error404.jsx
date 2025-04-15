import './error404.scss'

function Error404() {
    return (
        <div className='error404'>
            <h1 className='h1-404'>404</h1>
            <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <a className='return-home' href="/">Retourner sur la page d’accueil</a>
        </div>
    )
}

export default Error404