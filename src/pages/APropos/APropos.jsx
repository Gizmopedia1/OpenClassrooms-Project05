import './Apropos.scss'
import Banner from '../../components/Banner/Banner.jsx'
import bannerApropos from '../../assets/banner2.png'
import Collapse from '../../components/Collapse/Collapse.jsx'
import aproposList from '../../data/aproposList.js'

function APropos() {
  return (
    <>
      <div>
        <Banner banner={bannerApropos} />
        <div className="qualities-dropdown">
            {aproposList.map((item) => (
                <Collapse key={item.id} title={item.title} content={item.description} />
            ))}
        </div>
      </div>
    </>
  )
}

export default APropos