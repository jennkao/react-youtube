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

import React, { Component } from 'react'; //Find library called "react" and assign it to var
//this is the core library that knows how to render/nest react components
import ReactDOM from 'react-dom'; //React library to render to the DOM.
import SearchBar from './components/search_bar';
//no need to include file extension so long as it is a .JS file
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCgx2t0KNLfIh2QU4VWXCc3bpRrOZOitvs';
import VideoDetail from './components/video_detail';

//Create a new component, which is a function or object that should produce
//some HTML. After you create a component, you have to tell React to put 
//the generated HTML into the DOM.
//App is a constructor not an instance. We need to instantiate a component 
//before we render it to the DOM. Instantiating a component is baked into JSX :
//when you write <App />, you are creating an instance of App. 

//need to keep track of the list of videos by recording them on state
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null
		};

		//like AJAX: some config options and a callback option
		//search is a network request, takes a bit of time. in between the first
		//render of the component to fetching data to set it on our state, the
		//length of videos === 0, which is why we see 0 for half a second before
		//it updates to 5
		YTSearch({key: API_KEY, term: 'corgis'}, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			}); 
		});

	}

	render() {
		return ( 
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	} 

}
//when APP first renders, the videos array will be empty. some parent
//objects just can't get information fast enough to satisfy a child object.
//can add a check in vdeo detail;

//downwards data flow: we want most parent compnoent concerned with a piece of 
//info to be fetching the information 
//need to pass videoList data from parent App to child VideoLis: pass props.
//Data we pass from app to videolist (videos) is referred to as a prop, so 
//we pass prop Videos to Videolist. Everytime APP rerenders, egs when 
//setState runs, videoList also gets new videos.

//ReactDOM is the library to render elements to the DOM, takes two parameters.
//Render() takes the instance to render to the page, and target DOM node to 
//place element.
ReactDOM.render(<App />, document.querySelector('.container'));

//Index.js is the root of our application and our other components are branches.
//There is only one component per file.
