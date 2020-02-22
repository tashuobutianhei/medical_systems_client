import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import RootRoute from './router/router';


function App() {
	return (
		<BrowserRouter>
			<RootRoute></RootRoute>
		</BrowserRouter>
	);
}

export default App;
