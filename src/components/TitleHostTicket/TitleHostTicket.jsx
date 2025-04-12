import './TitleHostTicket.scss'
import LogementTitle from '../LogementTitle/LogementTitle.jsx'
import Host from '../Host/Host.jsx'


function TitleHostTicket() {
	return <div className='title-host'>
        <LogementTitle />
        <Host />
    </div>
}

export default TitleHostTicket