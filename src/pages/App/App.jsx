import './App.scss'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import bannerHome from '../../assets/banner1.png'

function App() {
  return (
    <>
      <div>
        <Banner banner={bannerHome} text='Chez vous, partout et ailleurs' />
        <Gallery />
      </div>
    </>
  )
}

export default App
