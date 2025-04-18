import './LogementTemplate.scss'
import Slider from '../../components/Slider/Slider.jsx'
import LogementTitle from '../../components/LogementTitle/LogementTitle.jsx'
import Host from '../../components/Host/Host.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import TwoCollapse from '../../components/TwoCollapse/TwoCollapse.jsx'
import Tags from '../../components/Tags/Tags.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json'
import Error404 from '../../components/Error404/Error404.jsx'


function LogementTemplate() {
    const { id } = useParams();
    const item = logements.find((item) => item.id === id);
    if (item == null) {
      return (
        <Error404 />
      )
    }
    const slides = item.pictures

    return (
        <div>
          <Slider slides={slides}/>
          <div className='grid-details'>
            <div className='logement-title'>
              <LogementTitle title={item.title} location={item.location} />
            </div>
            <div className='host-card'>
              <Host hostName={item.host.name} hostPicture={item.host.picture} />
            </div>
            <div className='tags-list'>
              <Tags tagList={item.tags} />
            </div>
            <div className='rating'>
              <Rating rating={item.rating} />
            </div>
          </div>
          <TwoCollapse 
            title1='Description' content={item.description}
            title2='Équipements' list={item.equipments}
          />
        </div>
    )
  
}  
  export default LogementTemplate