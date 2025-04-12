import './Collapse.css'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const chevron = <FontAwesomeIcon icon={faChevronUp} />


import React, { useState } from 'react';

const Collapse = ({ title, content, list }) => {
	const [isOpen, setIsOpen] = useState(false);
  
	return isOpen ? (
		<div className="collapse">
			<button className="collapse-title" onClick={() => setIsOpen(false)}>
				{title}
				<div className='chevron'>
					{chevron}
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
			<button className="collapse-title" onClick={() => setIsOpen(true)}>
				{title}
				<div className='chevron'>
					{chevron}
				</div>
			</button>
		</div>
  );
  };

export default Collapse;