import React, { Component } from 'react';
import '../css/portfolio.css'; //Import compiled SCSS file
import AssetEntries from '../AssetEntries';
import AssetCard from '../AssetCard';


class Assets extends Component {
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
				return <AssetCard title = {entries.title} 
				images={entries.images}
				id={entries.id}
				platform={entries.platform}
				link = {entries.link}
				price = {entries.price}
				key = {i}
			/>
			} else {
				for (let j = 0; j < entries.tags.length; j++) {
					if(entries.tags[j] === this.state.filter) {
					return <AssetCard title = {entries.title} 
					images={entries.images}
					id={entries.id}
					platform={entries.platform}
					link = {entries.link}
					price = {entries.price}
					key = {i}
					/>
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
				<h1>Assets</h1>
				<div className = 'filters'>
					<p>Filter assets using the buttons below</p>
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
						name = 'cgt'
						onClick = {this.onButtonChange}
						className = {this.state.filter === 'cgt' ? 'buttonActive' : 'buttonInactive'}
					>CGTrader</button>
					</div>

					<div className = 'filterButtons'>
						<button 
						type = 'button'
						name = 'unity'
						onClick = {this.onButtonChange}
						className = {this.state.filter === 'unity' ? 'buttonActive' : 'buttonInactive'}
					>Unity</button>
					</div>

					

				</div>
				<div className = 'gallery'>

				{
					//Show filtered list of portfolio cards
					this.filterCards(AssetEntries)
				}

				</div>
			</div>
		);
		
	}
}

export default Assets;