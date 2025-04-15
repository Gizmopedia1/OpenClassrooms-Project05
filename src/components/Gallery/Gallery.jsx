import React, { useState } from 'react';
import './Gallery.scss'
import LocationCard from '../LocationCard/LocationCard'
import locations from '../../data/logements.json';

const Gallery = () => {
    const [items] = useState(locations);
    return (
        <div className="gallery">
            {items.map(item => (
                <LocationCard key={item.id} id={item.id} cover={item.cover} title={item.title} />
            ))}
        </div>
    );
};

export default Gallery