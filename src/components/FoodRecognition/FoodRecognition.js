import React from 'react';
import './FoodRecognition.css'

const FoodRecognition = ({imageUrl}) => {
	return (
		<div className='center ma'>
			<div className="absolute mt2">
				<img alt='givenImage'src={imageUrl} width = '500px' height = 'auto' />
			</div>
		</div>
	);
}

export default FoodRecognition;