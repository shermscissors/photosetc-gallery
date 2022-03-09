// CSS
import './HeaderComponent.css';

// External Stuff
import React from 'react';

function HeaderCompnent(props) {
	return (
		<header>
			<div className='masthead'>
				<h1 className='headings' id='masthead-h1'>
					photos, etc.
				</h1>
				<a
					id='button-text'
					href='https://discord.gg/tPMbHYDfVd'
					target={'_blank'}
					rel='noreferrer'>
					<button id='masthead-button'>Take Me Somewhere Better</button>
				</a>
			</div>
		</header>
	);
}

export default HeaderCompnent;
