import React from 'react';
import './LocationCard.css'

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