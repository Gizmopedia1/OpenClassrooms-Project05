import banner1 from '../../assets/banner1.png'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <img src={banner1} alt='Bannière, photo de plage' className='banner' />
        </div>
    )
}

export default Banner