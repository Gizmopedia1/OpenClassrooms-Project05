import './rating.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const starFull = <FontAwesomeIcon icon={faStar} style={{color: "#FF6060"}} />
const starEmpty = <FontAwesomeIcon icon={faStar} style={{color: "#E3E3E3"}} />

const Rating = ({ rating }) => {
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span className='stars' key={i}>
          {i < rating ? starFull : starEmpty }
          </span>
      );
    }
  
    return stars;
  };

  export default Rating;