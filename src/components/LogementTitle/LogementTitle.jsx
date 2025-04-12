import './LogementTitle.scss'

function LogementTitle({ title, location }) {
	return <div className='LogementTitle'>
        {title && <h1 className='logement-name'>{title}</h1>}
        {location && <p className='logement-city'>{location}</p>}
        </div>
}

export default LogementTitle