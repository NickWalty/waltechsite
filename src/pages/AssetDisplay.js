import React from 'react';
import AssetEntries from '../AssetEntries';
import '../css/portfolio.css'; //Import compiled SCSS file

const PortfolioDisplay = ({ match}) => {
	const picPath = 'https://www.waltechvis.com/asset/full/';
	const currentID = parseInt(match.params.id);
	const index = () => {
		for (let i = 0; i < AssetEntries.length; i++ ) {
			if(i === currentID) {
				return i;
			}
		}
		return null;
	}
	const currentGallery = AssetEntries[index()];


	return(
		<div className = 'project'>
			<h1> {currentGallery.title} </h1>
			<p>Design by {currentGallery.designer}</p>
			{
				currentGallery.images.map((entry, i) => {
					return (
					<div className = 'galleryLink' key = {i}>
						<a href = {`${picPath}${currentGallery.images[i]}`}>
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

export default AssetDisplay;