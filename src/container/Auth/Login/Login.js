import React, { Component } from 'react';
import firebase from '../../../config/authConfig';

import classes from './Login.module.scss';



import InputField from '../../../components/UI/Input/InputField';
import Button from '../../../components/UI/Button/Button';

class Login extends Component {
	constructor(props) {
        super(props);
        this.login = this.login.bind(this);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
            console.log(u.user.uid);
            this.props.history.push('/dashboard')
        }).catch((e) => {
            console.log(e);
        })
    }


	render() {
		return (
			<div className={classes.Login}>
				<InputField
					value={this.state.email}
					type="email"
					name="email"
					placeholder="your email"
					onChange={this.handleChange}
					autocomplete="off"
				/>
				<InputField
					value={this.state.password}
					type="password"
					name="password"
					placeholder="your password"
					onChange={this.handleChange}
					autocomplete="off"
				/>
				<Button value="general" onClick={this.login}>Login</Button>
				
			</div>
		);
	}
}

export default Login;
