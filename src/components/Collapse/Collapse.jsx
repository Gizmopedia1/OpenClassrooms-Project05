import './Collapse.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const chevron = <FontAwesomeIcon icon={faChevronDown} />


import React, { useState } from 'react';

const Collapse = ({ title, content, list }) => {
	const [isOpen, setIsOpen] = useState(false);
  
	return (
		<div className="collapse">
			<button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
				{title}
				<div className={`chevron ${isOpen ? 'rotated' : ''}`}>
					{chevron}
				</div>
			</button>
			{isOpen && (
			  <>	
					{content && <p className='collapse-text'>{content}</p>}
					{list && list.length > 0 && (
						<ul className="collapse-list">
							{list.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					)}	
				</>
			)}
		</div>
	)
}

export default Collapse;