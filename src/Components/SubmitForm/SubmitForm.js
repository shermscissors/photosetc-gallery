// CSS
import './SubmitForm.css';

// External Stuff
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


function SubmitForm(props) {
	const navigate = useNavigate();
	const [newPhoto, setNewPhoto] = useState({
		image: '',
		owner: '',
		description: '',
	});

	const handleChange = (event) => {
		setNewPhoto({ ...newPhoto, [event.target.id]: event.target.value });
	};

	const createNewPhoto = () => {
		fetch('https://photosetc-backend.herokuapp.com/api/photos', {
			method: 'POST',
			body: JSON.stringify(newPhoto),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			navigate('/gallery');
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createNewPhoto();
	};

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
