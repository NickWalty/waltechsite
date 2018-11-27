import React from 'react';


const AssetCard = ({ title, images, id, platform, link, price }) => {
	const picPath = 'https://www.waltechvis.com/assets/';
	return (
		<div className = 'pCard'>
		<a href = {link} className = 'cardLink'>
		<h3>{title}</h3>
		<img className = 'mainImage'
			alt = {`${title} - Platform: ${platform}`}
			src = {`${picPath}feature/${images[0]}`}
			id = {id}
		/>
		<div className = 'smallImages'>
		{
			images.map((card, i) => {
				if(i === 0) {
					return null;
				} else {
					return <img className = 'subImage'
					alt = {`${title} - Platform: ${platform}`}
					src = {`${picPath}thumb/${images[i]}`}
					id = {id}
					key = {i}
					/>
				}
			})
		}
		</div>
			<div className = 'assetBottom'>
				<p className = 'left'>Platform: {platform}</p>
				<p className = 'right'>{price}</p>
			</div>
		</a>
		</div>
		
		
	);
}

export default AssetCard;