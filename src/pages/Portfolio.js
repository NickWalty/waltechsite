import React, { Component } from 'react';
import '../css/portfolio.css'; //Import compiled SCSS file
import PortfolioEntries from '../PortfolioEntries';
import PortfolioCard from '../PortfolioCard';


class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			filter:'',
			filteredEntries: []
		}
	}

	//Create filters and event handlers
	filterCards = (arr) => {
		const output = arr.map((entries, i) => {
			
			if(this.state.filter === '') {
				return <PortfolioCard title = {entries.title} 
				images={entries.images}
				id={entries.id}
				designer={entries.designer}
				tags = {entries.tags}
				key = {i}
			/>
			} else {
				for (let j = 0; j < entries.tags.length; j++) {
					if(entries.tags[j] === this.state.filter) {
						return <PortfolioCard title = {entries.title} 
						images={entries.images}
						id={entries.id}
						designer={entries.designer}
						tags = {entries.tags}
						key = {i}
						/>
					} else {
						
					}
				}
				return null;
			}
			
		})
		return output;
	}

	onButtonChange = (event) => {
		if ( event.target.name === 'all' ) {
			this.setState({
				filter: ''
			});
		} else {
			this.setState({
				filter: event.target.name
			});
		}
	}

	render() {

		return (
			<div className= "portfolio">
				<h1>Portfolio</h1>
				<div className = 'filters'>
					<p>Filter projects using the buttons below</p>
					<div className = 'filterButtons'>
						<button 
						type = 'button'
						name = 'all'
						onClick = {this.onButtonChange}
						className = {this.state.filter === '' ? 'buttonActive' : 'buttonInactive'}
					>All</button>
					</div>

					<div className = 'filterButtons'>
						<button 
						type = 'button'
						name = 'exterior'
						onClick = {this.onButtonChange}
						className = {this.state.filter === 'exterior' ? 'buttonActive' : 'buttonInactive'}
					>Exterior</button>
					</div>

					<div className = 'filterButtons'>
						<button 
						type = 'button'
						name = 'interior'
						onClick = {this.onButtonChange}
						className = {this.state.filter === 'interior' ? 'buttonActive' : 'buttonInactive'}
					>Interior</button>
					</div>

					<div className = 'filterButtons'>
						<button 
						type = 'button'
						name = 'aerial'
						onClick = {this.onButtonChange}
						className = {this.state.filter === 'aerial' ? 'buttonActive' : 'buttonInactive'}
					>Aerial</button>
					</div>

					<div className = 'filterButtons'>
						<button 
						type = 'button'
						name = 'video'
						onClick = {this.onButtonChange}
						className = {this.state.filter === 'video' ? 'buttonActive' : 'buttonInactive'}
					>Video</button>
					</div>

				</div>
				<div className = 'gallery'>

				{
					//Show filtered list of portfolio cards
					this.filterCards(PortfolioEntries)
				}

				</div>
			</div>
		);
		
	}
}

export default Portfolio;