import './LogementTemplate.scss'
import LogementTitle from '../../components/LogementTitle/LogementTitle.jsx'
import Host from '../../components/Host/Host.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import Tags from '../../components/Tags/Tags.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json'


function LogementTemplate() {
    const { id } = useParams();
    const item = logements.find((item) => item.id === id);
  
    return (
        <div>
          <div className='title-host'>
            <LogementTitle title={item.title} location={item.location} />
            <Host hostName={item.host.name} hostPicture={item.host.picture} />
          </div>
          <div className='tags-stars'>
            <Tags tagList={item.tags} />
            <Rating stars={item.rating} />
          </div>
          <div className="two-collapse">
            <Collapse title='Description' content={item.description} />
            <Collapse title='Équipements' list={item.equipments} />
          </div>
        </div>
    )
  
}  
  export default LogementTemplate