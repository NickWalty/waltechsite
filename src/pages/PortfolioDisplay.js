import React from 'react';
import PortfolioEntries from '../PortfolioEntries';
import '../css/portfolio.css'; //Import compiled SCSS file

const PortfolioDisplay = ({ match }) => {
	const picPath = 'https://www.waltechvis.com/portfolio/full/';
	const currentID = parseInt(match.params.id);
	console.log(match);
	const index = () => {
		for (let i = 0; i < PortfolioEntries.length; i++ ) {
			if(i === currentID) {
				return i;
			}
		}
		return null;
	}
	const currentGallery = PortfolioEntries[index()];


	return(
		<div className = 'project'>
			<h1> {currentGallery.title} </h1>
			<p>Design by {currentGallery.designer}</p>
			{
				currentGallery.images.map((entry, i) => {
					return (
					<div className = 'galleryLink' key = {i}>
						<a href = {currentGallery.tags[0] === 'video' ? currentGallery.tags[currentGallery.tags.length-1] :
							`${picPath}${currentGallery.images[i]}`}>
							<img className = 'largePic'
							alt = {`${currentGallery.title} - Designed by ${currentGallery.designer}`}
							src = {`${picPath}${currentGallery.images[i]}`}
							id = {currentGallery.id}
							/>
						</a>
					</div>
					)
				})
			}
			
			
		</div>
	)

}

export default PortfolioDisplay;