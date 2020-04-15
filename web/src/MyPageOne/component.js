import React, { Component } from 'react';

class UIComponent extends Component {

	constructor(props){
		super(props);	
		this.state = {
			count : null,
			name : ""
		}	
	}

	componentDidMount(){
		this.getUserList();
	}

	getUserList = (event) =>
	{
		console.log("UIComponent.js - getUserList() called");
		console.log("UIComponent.js - getUserList() called - this.props.getSth: " , this.props.getUserList);
		// call redux store function 
		// it will eventually update the Redux state and this UI will reflect the this.props.myCount change automatically
		this.props.getUserList();

		console.log("UIComponent.js - getUserList() called - this.props: " , this.props);

	}

	addUser = (event) =>
	{
		console.log("UIComponent.js - addUser() called");
		this.props.addUser(this.state.name);

	}

	handleNameChange = (event) =>
	{
		console.log("UIComponent.js - handleNameChange() called");
		this.setState({name: event.target.value});
	}
	


	render() {
		return (
			<div>
				<h1>Docker demo - web</h1>
				
				<div>
					<label>
					new user:
					<input type="text" value={this.state.name} onChange={this.handleNameChange} />
					</label>
					<button onClick={this.addUser}>Add user</button>
				</div>


                {/* <button onClick={this.getUserList}>get user list</button> */}

				{this.props.reduxState.MyPageOneState.users && 
				this.props.reduxState.MyPageOneState.users.map(user => (
					<div className="margin-auto">
					<div className="flex-container-flex-start">
					<div className="flex-container">
						<img className="myavatar" src={require('./avatar.jpg')} /> 
						<button className="ui basic button">{user.name}</button>
						<button className="ui basic button">{user.email}</button>					
					</div>
					</div>
					</div>
				))}
			</div>
		);
	}	
}


export default UIComponent;