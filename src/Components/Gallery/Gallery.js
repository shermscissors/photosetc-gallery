//  CSS
import './Gallery.css';

// External Stuff
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function About(props) {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('https://photosetc-backend.herokuapp.com/api/photos')
			.then((res) => res.json())
			.then((res) => {
				setPhotos(res);
			});
	}, []);

	return (
		<div className='body-container'>
			<article className='page-header'>
				<h1 className='page-heading'>Gallery</h1>
				<Link to={'/submit-image'}><button className='page-button'>Post Image</button></Link>
			</article>
			<ul className='gallery-container'>
				{photos.map((photo) => {
					return ( 
						<li>
							<img src={photo.image} alt={photo.description} />
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default About;
