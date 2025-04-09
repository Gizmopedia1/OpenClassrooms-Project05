import React, { useState } from 'react';
import './Gallery.css'
import LocationCard from '../LocationCard/LocationCard'
import locations from '../../data/logements.json';

const Gallery = () => {
    const [items] = useState(locations);
    console.log(locations)
    return (
        <div className="gallery">
            {items.map(item => (
                <LocationCard key={item.id} cover={item.cover} title={item.title} />
            ))}
        </div>
    );
};


// const Gallery = () => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         const fetchlocations = async () => {
//             try {
//                 const response = await fetch('../../data/logements.json');
//                 const locations = await response.json();
//                 console.log(response);
//                 setItems(locations);
//             } catch (error) {
//                 console.error("Erreur lors du chargement des données : ", error);
//             }
//         };

//         fetchlocations();
//     }, []);

//     return (
//         <div className="gallery">
//             {items.map(item => (
//                 <LocationCard key={item.id} cover={item.cover} title={item.title} />
//             ))}
//         </div>
//     );
// };



// export default Gallery

export default Gallery