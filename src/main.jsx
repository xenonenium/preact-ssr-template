import render from 'preact-render-to-string';
import Router from 'preact-router'
import { App } from './app'
import './css/tailwind.css'

const Main = () => (
	<Router>
		<App  path="/" />
<App path="/app" />
	</Router>
);

 document.getElementById('app').innerHTML = render(<Main />)
