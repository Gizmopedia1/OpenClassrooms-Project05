import logoWhite from '../../assets/kasa-logo-white.png'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <img src={logoWhite} alt='Logo de Kasa en blanc' className='logo-white' />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer