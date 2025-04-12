import React from 'react';
import './LocationCard.css'
import { Link } from 'react-router-dom';


const LocationCard = ({ cover, title, id }) => {
    return (
        <div className="location-card">
            <Link to= {`/details/${id}`} >
                <img src={cover} alt={title} className="location-image" />
                <div className="location-gradient"></div>
                <h2 className="location-title">{title}</h2>
            </Link>
        </div>
    );
};

export default LocationCard;