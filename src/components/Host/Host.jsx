import './Host.scss'

function Host({ hostPicture, hostName }) {
	return <div className='host'>
        <p className='host-name'>{hostName}</p>
        <img src={hostPicture} className='host-picture' />
    </div>
}

export default Host