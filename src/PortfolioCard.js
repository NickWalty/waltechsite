import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioCard = ({ title, images, id, designer, tags }) => {
	const idPath = '/portfolio/' + id;
	const picPath = 'https://www.waltechvis.com/portfolio';
	return (
		<div className = 'pCard'>
		<Link to = {idPath} className = 'cardLink'>
		<h3>{title}</h3>
		<img className = 'mainImage'
			alt = {`${title} - Designed by ${designer}`}
			src = {`${picPath}/feature/${images[0]}`}
			id = {id}
		/>
		<div className = 'smallImages'>
		{
			images.map((card, i) => {
				if(i === 0) {
					return null;
				} else {
					return <img className = 'subImage'
					alt = {`${title} - Designed by ${designer}`}
					src = {`${picPath}/thumb/${images[i]}`}
					id = {id}
					key = {i}
					/>
				}
			})
		}
		</div>
			
			<div>
				<p>Designed by: {designer}</p>
			</div>
		</Link>
		</div>
		
		
	);
}

export default PortfolioCard;