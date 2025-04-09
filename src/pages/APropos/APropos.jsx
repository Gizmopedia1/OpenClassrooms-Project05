import Banner from '../../components/Banner/Banner'
import bannerApropos from '../../assets/banner2.png'
import Collapse from '../../components/Collapse/Collapse'
import aproposList from '../../data/aproposList.js'

function APropos() {
  return (
    <>
      <div>
        <Banner>
          <img src={bannerApropos} alt='Bannière, photo de forêt et montagnes' className='banner' />
        </Banner>
        {/* <Collapse>
        <ul>
            {aproposList.map((qualities) => (
                <li key={ qualities.id }>{ qualities }</li>
            ))}
        </ul>
        </Collapse> */}
      </div>
    </>
  )
}

export default APropos


// {plantList.map((plant) => (
//   <li key={ plant.id }>
//       {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
//   </li>
// ))}