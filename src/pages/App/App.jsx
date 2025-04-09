import './App.scss'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import bannerHome from '../../assets/banner1.png'

function App() {
  return (
    <>
      <div>
        <Banner>
          <img src={bannerHome} alt='Bannière, photo de plage' className='banner' />
          <h1 className='banner-heading'>Chez vous, partout et ailleurs</h1>
        </Banner>
        <Gallery />
      </div>
    </>
  )
}

export default App
