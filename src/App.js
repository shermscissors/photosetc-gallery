// Components
import HeaderComponent from './Components/Header/HeaderComponent';
import Navigation from './Components/Navigation/Navigation';
import Gallery from './Components/Gallery/Gallery';
import SubmitForm from './Components/SubmitForm/SubmitForm';

// CSS
import './App.css';

// External Stuff
import { Route, Routes } from 'react-router-dom';

function App() {
	// Console Stuff
	setTimeout(() => {
		console.log('Loading...');
	}, 5000);

	return (
		<div className='App'>
				<Routes>
					<Route index path='/' element={<HeaderComponent />} />
					<Route path='/Gallery' element={<Gallery />} />
					<Route path='Submit-Image' element={<SubmitForm/>}/>
				</Routes>
			<nav>
				<Navigation />
			</nav>
		</div>
	);
}

export default App;
