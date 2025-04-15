// import Carousel from 'react-bootstrap/Carousel'
import './Slider.scss'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import sliderImage from '../../assets/banner1.png'

function Slider () {
	return <div className='slider'>
		<img src={sliderImage} className='slider-image' />
		<div className='chevron-flex'>
			<img src={chevronLeft} className='chevron-left' />
			<img src={chevronRight} className='chevron-right' />
		</div>
		<p className='picture-number'>1/4</p>
	</div>
}

export default Slider


// function Slider ({ sliderImage, text }) {
	// {text && <p className='picture-number'>{text}</p>}
