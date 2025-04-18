import './Banner.scss'

function Banner({ banner, text }) {
	return <div className='banner-flex'>
		<img src={banner} className='banner' />
		{text && <h1 className='banner-heading'>{text}</h1>}
	</div>
}

export default Banner