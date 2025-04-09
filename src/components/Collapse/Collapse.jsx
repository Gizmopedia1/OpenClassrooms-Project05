import './Collapse.css'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const chevron = <FontAwesomeIcon icon={faChevronUp} />


import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(true);
  
	return isOpen ? (
	  <div className="collapse">
		<button className="collapse-title" onClick={() => setIsOpen(false)}>
			{title}
		  <div>{chevron}</div>
		</button>
  	  </div>
	) : (
	  <div className="collapse">
		  <button className="collapse-title" onClick={() => setIsOpen(true)}>
			  {title}
			  <div>{chevron}</div>
		  </button>
		  <div className="collapse-text">
			{children}
		  </div>
	  </div>
  )
  };

export default Collapse;