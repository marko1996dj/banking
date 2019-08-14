import React, { Component } from 'react';
import firebase from '../../../config/authConfig';

import classes from './Register.module.scss';

import InputField from '../../../components/UI/Input/InputField';
import Button from '../../../components/UI/Button/Button';

class Register extends Component {
	constructor(props) {
		super(props);
		this.register = this.register.bind(this);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	register = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then((u) => {
                console.log(u.user.uid);
                this.props.history.push('/dashboard');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className={classes.Register}>
				<InputField
					value={this.state.email}
					type="email"
					name="email"
					placeholder="your email"
					onChange={this.handleChange}
				/>
				<InputField
					value={this.state.password}
					type="password"
					name="password"
					placeholder="your password"
					onChange={this.handleChange}
				/>
				<Button value="general" onClick={this.register}>Register</Button>
			</div>
		);
	}
}

export default Register;
