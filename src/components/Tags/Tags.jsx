import './Tags.scss'
import React from 'react';

const Tags = ({ tagList }) => {
    return (
        <div className="tags">
			{tagList && tagList.length > 0 && (
  				<div className="tags-text">
    				{tagList.map((item, index) => (
      					<p key={index}>{item}</p>
    				))}
  				</div>
			)}		
        </div>
    );
};

export default Tags;