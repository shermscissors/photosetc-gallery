// CSS
import './Navigation.css';

// External Stuff
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<div>
			<ul className='navigation-list'>
				<li>
					<Link to='../'>Home</Link>
				</li>
				<li>
					<Link to='../About'>About</Link>
				</li>
				<li>
					<Link to='../Blog'>Blog</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
