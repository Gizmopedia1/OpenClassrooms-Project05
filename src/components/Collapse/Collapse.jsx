import './Collapse.scss'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const chevronUp = <FontAwesomeIcon icon={faChevronUp} />
const chevronDown = <FontAwesomeIcon icon={faChevronDown} />


import React, { useState } from 'react';

const Collapse = ({ title, content, list }) => {
	const [isClose, setIsClose] = useState(false);
  
	return isClose ? (
		<div className="collapse">
			<button className="collapse-title" onClick={() => setIsClose(false)}>
				{title}
				<div className='chevron-down'>
					{chevronDown}
				</div>
			</button>
			{content && <p className='collapse-text'>{content}</p>}
			{list && list.length > 0 && (
  				<ul className="collapse-list">
    				{list.map((item, index) => (
      					<li key={index}>{item}</li>
    				))}
  				</ul>
			)}		
		</div>
	) : (
	  	<div className="collapse">
			<button className="collapse-title" onClick={() => setIsClose(true)}>
				{title}
				<div className='chevron-up'>
					{chevronUp}
				</div>
			</button>
		</div>
  );
  };

export default Collapse;