// CSS
import './SubmitForm.css';

// External Stuff
import React from 'react';
import { Link } from 'react-router-dom';

function SubmitForm(props) {
	return (
		<div className='body-container'>
			<article className='page-header'>
				<h1 className='page-heading'>Post Image</h1>
				<Link to={'../gallery'}>
					<button className='page-button'>Go Back</button>
				</Link>
			</article>
			<div className='submit-container'>
				<form action='submit' className='submit-form'>
					<label for='text'>
						<h3>title:</h3>{' '}
					</label>
					<input type='text' id='title' name='title' required />
					<br />
					<label for='username'>
						<h3>username:</h3>
					</label>
					<input type='text' id='username' name='username' required placeholder='@' />
					<br />
					<label for='image' className='upload-button'>
						select image
					</label>
					<input type='file' name='image' id='image' required />
					<br />
					<input className='page-button' id='submit-button' type='submit' />
				</form>
			</div>
		</div>
	);
}

export default SubmitForm;
