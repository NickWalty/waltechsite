import React from 'react';
import { NavLink } from 'react-router-dom';
import title_bg1 from './images/title_bg1.jpg';
import title_bg2 from './images/title_bg2.jpg';
import title_bg3 from './images/title_bg3.jpg';

const Menu = () => {

const getBG = () => {
	const bgNum = Math.floor(Math.random() * 3);
	if( bgNum === 1) {
		return title_bg1;
	} else if ( bgNum === 2) {
		return title_bg2;
	} else {
		return title_bg3;
	}
}

return (
	<div className = 'menu'>
		<img src = {getBG()} alt = 'Welcome to WalTech Visualization' />
		<div className = 'title'>
			<p className = 'top'>WalTech Visualization</p>
			<p className = 'bottom'>3D Visualization Services for Designers</p>
		</div>
		<div className = 'navBar'>
			<NavLink to='/' exact className = 'nav' activeClassName = 'navSelected'> Home </NavLink>
			<NavLink to='/portfolio' exact className = 'nav' activeClassName = 'navSelected'> Portfolio </NavLink>
			<NavLink to='/assets' exact className = 'nav' activeClassName = 'navSelected'> Assets </NavLink>
			<NavLink to='/contact' exact className = 'nav' activeClassName = 'navSelected'> Contact </NavLink>
		</div>
	</div>
	);

}

export default Menu;
