import './LogementTitle.scss'

function LogementTitle({ title, location }) {
	return <div className='LogementTitle'>
                <h1 className='logement-name'>{title}</h1>
                <p className='logement-city'>{location}</p>
        </div>
}

export default LogementTitle