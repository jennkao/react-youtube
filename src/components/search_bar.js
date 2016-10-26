import React, { Component } from 'react';
//import react, pull off the property 'Component' as a variable called Component

//when we translate JSX to normal JS, it turns into a call
//called React.createElement, which will throw an error if React is not in 
//the scope of the file.

//Functional component: some information goes into function, JSX comes out.
//Another type of component is a class based component, used whenever you want a
//component to have some internal track of state--some ability to tell other
//parts of the app that user has typed this into the input box.
//Create it using an ES6 Class: javascript object with property and methods to it.
//Start off with a functional component and upgrade to class when you need state.

class SearchBar extends Component { //Define a new class called Searchbar 
//and give it access to all the functionality that React.Component has.
	
	constructor(props) { //how you initialize state in a class based component
		//all class based components have special function called constructor, 
		//first and only func that is called auto when new instance of class
		//is created. reserved for setup inside our class like init vars and state.
		
		super(props); //Component itself has its own constructor function; when we define a 
		//method already defined on parent class, we can call parent method on parent
		//class by calling super. Without super, you'd get an error.

		this.state = { term : '' } //whenever you use state, you init by creating
		//new obj and assigning to this.state. this obj should contain properties
		//that we want to record on the state (eg. when user updates search input 
		//term is where we want to update that). Only inside of the constructor function
		//do we "assign" state. Everywhere else, instead of using this.state =, we use
		//this.setState
	}

	render() { //syntax to define methods on a class
		//controlled component/form element, controlled coponent has value set by state
		//so its value only ever changes when the state changes
		return (
			<div className="search-bar">
				<input 
					value = {this.state.term} //value of the input it set to retrieve this.state.term ('')
					onChange={event => this.onInputChange(event.target.value)} />
			</div> 
		);
		//even after you type stuff in/when onChange runs, the value of the input has not changed
		//only after the eventHandler runs and updates this.state.term to new value.
		//whenever setState calls, the component immed re-renders so when render function
		//re-called, the value of the input is updated to receive the new value of 
		//this.state.term and finally the component finishes rendering and the new value
		//of the input is visible on the screen. When a user types something, it doesn't
		//change the input value, only triggered an event that updates the state that
		//cause the value of the input to change
		//This is how React treats data: it's much more declarative syntax. Value of input
		//is equal to State. This feature allows us to have things like have SearchBar
		//have a starting value pretty easily. Also allows us to read value of the input much
		//easily using this.state.term then using something like Jquery.
	}//whenever setState is called, our component is auto re-render and push all
	//those updated info from render method into the DOM. when state is updated, 
	//think STATE;
//all input elements emit a change event; to tap into a browser event use 
//{"on" + <event> = this.method}
//whenever we write JS in JSX, you have to wrap them in curly braces 

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

} //every class must have a render function, and it must return JSX or err.



//state is a plain JS object that is used to record and react to user events
//each class based component has its own state obj; whenever a component state 
//is changed, component immed. re-renders and all of its children re-renders


export default SearchBar;