//React is a JS library that is used to produce HTML that is shown to user in 
//a browser. When we write React code, we are writing individual components/views.
//Components are snippets of code that produce HTML. You nest components together
//in different fashions to make complex applications pretty simple.
//A component is a collection of JS functions that produce HTML.

//JSX is a dialect of JS, allows us to write what looks like HTML in our JS
//but really behind the scene, it is JS. Webpack/babel transpiles code before
//it runs in the browser, as the browser can't interpret JSX. Purpose of JSX
//have JS code that can ultimately produce HTML (a lot more clean than vanilla JS)

// Whenever we import code from files that we wrote in JS, we have to give an 
// actual file reference (relative path). We don't have to do it for the libraries 
// because they are namespaced. Can only have one installed package called react. 

import React from 'react'; //Find library called "react" and assign it to var
//this is the core library that knows how to render/nest react components
import ReactDOM from 'react-dom'; //React library to render to the DOM.
import SearchBar from './components/search_bar' 
//no need to include file extension so long as it is a .JS file

const API_KEY = 'AIzaSyCgx2t0KNLfIh2QU4VWXCc3bpRrOZOitvs';

//Create a new component, which is a function or object that should produce
//some HTML. After you create a component, you have to tell React to put 
//the generated HTML into the DOM.
//App is a constructor not an instance. We need to instantiate a component 
//before we render it to the DOM. Instantiating a component is baked into JSX :
//when you write <App />, you are creating an instance of App. 
const App = () => { 
	return ( //when writing multi-line JSX, can use parentheses
		<div>
			<SearchBar />
		</div>
	);
}

//ReactDOM is the library to render elements to the DOM, takes two parameters.
//Render() takes the instance to render to the page, and target DOM node to 
//place element.
ReactDOM.render(<App />, document.querySelector('.container'));

//Index.js is the root of our application and our other components are branches.
//There is only one component per file.
