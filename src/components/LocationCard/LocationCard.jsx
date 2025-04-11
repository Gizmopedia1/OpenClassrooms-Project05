import React from 'react';
import './LocationCard.css'

const LocationCard = ({ cover, title, id }) => {
    return (
        <div className="location-card">
            <a href={id}>
                <img src={cover} alt={title} className="location-image" />
                <div className="location-gradient"></div>
                <h2 className="location-title">{title}</h2>
            </a>
        </div>
    );
};

export default LocationCard;