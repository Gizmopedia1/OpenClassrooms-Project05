import { useState } from 'react'
import './Slider.scss'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'

function Slider ({slides}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalIndex = slides.length;

	const prevImage = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}
	const nextImage = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex)
	}

	const hasMultipleSlides = slides.length > 1;

	return <div className='slider'>
				{hasMultipleSlides && (
					<div className='chevron-flex'>
						<button onClick={prevImage} className='chevron-left' alt='Image précedente'>
							<img src={chevronLeft} />
						</button>
						<button onClick={nextImage} className='chevron-right' alt='Image suivante'>
							<img src={chevronRight} />
						</button>
					</div>
					)
				}
				<img src={slides[currentIndex]} className='slider-image' />
				{hasMultipleSlides && (
					<p className='picture-number'>{currentIndex + 1} / {totalIndex}</p>
					)
				}
			</div>
}

export default Slider