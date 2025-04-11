import './Collapse.css'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const chevron = <FontAwesomeIcon icon={faChevronUp} />


import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
  
	return isOpen ? (
		<div className="collapse">
			<button className="collapse-title" onClick={() => setIsOpen(false)}>
				{title}
				<div className='chevron'>
					{chevron}
				</div>
			</button>
			<div className="collapse-text">
				{children}
			</div>
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