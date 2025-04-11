import './Apropos.scss'
import Banner from '../../components/Banner/Banner.jsx'
import bannerApropos from '../../assets/banner2.png'
import Collapse from '../../components/Collapse/Collapse.jsx'
import aproposList from '../../data/aproposList.js'

function APropos() {
  return (
    <>
      <div>
        <Banner>
          <img src={bannerApropos} alt='Bannière, photo de forêt et montagnes' className='banner' />
        </Banner>
        <div className="qualities-dropdown">
            {aproposList.map((item) => (
                <Collapse key={item.id} title={item.title}>
                  <p>{item.description}</p>
                </Collapse>
            ))}
        </div>
      </div>
    </>
  )
}

export default APropos