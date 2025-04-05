import kasaLogo from '../../assets/kasa-logo.png'
import './Nav.css'
import NavList from '../NavList/NavList'

function Nav() {
    return (
        <div className='kasa-nav'>
            <img src={kasaLogo} alt='Kasa' className='kasa-logo' />
            <NavList />
        </div>
    )
}

export default Nav