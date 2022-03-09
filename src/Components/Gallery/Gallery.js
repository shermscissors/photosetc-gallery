//  CSS
import './Gallery.css'

// External Stuff
import React from 'react';


function About(props) {
	return (
		<div className='body-container'>
			<h1>Gallery</h1>
			<h2>Subheading Stuff</h2>
			<span className='grid-template'>
				<img src={'../../assets/456373006516-R1-035-16.jpg'} alt='' />
				<img src={'../../assets/clouds.jpg'} alt='' />
				<img src={'../../assets/DSCF0089.jpg'} alt='' />
				<img src={'../../assets/DSCF0095.jpg'} alt='' />
			</span>
		</div>
	);
}

export default About;
