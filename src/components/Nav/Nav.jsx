import kasaLogo from '../../assets/kasa-logo.png'
import './Nav.scss'
import NavList from '../NavList/NavList'

function Nav() {
    return (
        <div className='kasa-nav'>
            < a href="/"><img src={kasaLogo} alt='Kasa' className='kasa-logo' /></a>
            <NavList />
        </div>
    )
}

export default Nav