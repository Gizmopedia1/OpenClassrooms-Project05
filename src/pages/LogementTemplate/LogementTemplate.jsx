import './LogementTemplate.scss'
import { useEffect, useState } from "react";
import Slider from '../../components/Slider/Slider.jsx'
import LogementTitle from '../../components/LogementTitle/LogementTitle.jsx'
import Host from '../../components/Host/Host.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
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

    const useIsResponsive = () => {
      const [isResponsive, setIsResponsive] = useState(false);
    
      useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
    
        const handleChange = () => setIsResponsive(mediaQuery.matches);
        
        handleChange(); // initial check
        mediaQuery.addEventListener("change", handleChange);
    
        return () => mediaQuery.removeEventListener("change", handleChange);
      }, []);
    
      return isResponsive;
    };
    
    
    return (
        <div>
          <Slider slides={slides}/>
          <div className='title-host'>
            <LogementTitle title={item.title} location={item.location} />
            <Host hostName={item.host.name} hostPicture={item.host.picture} />
          </div>
          <div className='tags-stars'>
            <Tags tagList={item.tags} />
            <Rating rating={item.rating} />
          </div>
          <div className="two-collapse">
            <Collapse title='Description' content={item.description} />
            <Collapse title='Équipements' list={item.equipments} />
          </div>
        </div>
    )
  
}  
  export default LogementTemplate