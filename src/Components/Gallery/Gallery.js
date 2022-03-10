//  CSS
import './Gallery.css';

// External Stuff
import React from 'react';
import {Link} from 'react-router-dom'

function About(props) {
	return (
		<div className='body-container'>
			<article className='page-header'>
				<h1 className='page-heading'>Gallery</h1>
				<Link to={'/submit-image'}><button className='page-button'>Post Image</button></Link>
			</article>
			<section className='gallery-container'>
				<img src={'../../assets/456373006516-R1-035-16.jpg'} alt='' />
				<img src={'../../assets/clouds.jpg'} alt='' />
				<img src={'../../assets/DSCF0089.jpg'} alt='' />
				<img src={'../../assets/DSCF0095.jpg'} alt='' />
			</section>
		</div>
	);
}

export default About;
