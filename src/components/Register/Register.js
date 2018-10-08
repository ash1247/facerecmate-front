import React from 'react';
import "tachyons"

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onSubmitSignIn = () => {
		fetch("https://limitless-forest-59296.herokuapp.com/register", {
			method: 'post',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		}).then(response => response.json())
		  .then(user => {
		  	if (user.id) {
		  		this.props.loadUser(user);
		  		this.props.onRouteChange("home");
		  	}
		  })
	}

	render() {
		return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure">
					<legend className="f2 fw6 ph0 mh0">Register</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
						<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-95"
							type="name" name="name" id="name" onChange={this.onNameChange}/>
					</div>
					<div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
							type="email" name="email_address" id="email-address" onChange={this.onEmailChange} />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
							type="password" name="password" id="password" onChange={this.onPasswordChange}/>
					</div>
					<label className="pa0 ma0 lh-copy f6 pointer" />
						
						<div className="">
							<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
							type="submit" value="Register" onClick={this.onSubmitSignIn} />
						</div>
					</div>
				</main>
			</article>
		);
	}
}
	
export default Register;