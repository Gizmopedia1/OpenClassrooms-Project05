import React from 'react';
import './LocationCard.css'
// import bannerHome from '../../assets/banner1.png'

const LocationCard = ({ cover, title }) => {
    return (
        <div className="location-card">
            <img src={cover} alt={title} className="location-image" />
            <div className="location-gradient"></div>
            <h2 className="location-title">{title}</h2>
        </div>
    );
};

export default LocationCard;

// function LocationCard (){
//     return (
//         <div className='location-card'>
//             <img src={cover} alt={title} className='location-image' />
//             <h2 className='location-title'>{title}</h2>
//         </div>
// );
// };

// function LocationCard() {
//     return (
//         <div className='location-card'>
//             <h2 className='location-title'>Titre de la location</h2>
//             {/* <div className='location-gradient'></div> */}
//             <img src={bannerHome} alt='truc' className='location-image' />
//         </div>
// );
// };

// export default LocationCard