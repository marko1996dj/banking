import React, { Component } from 'react';
import classes from './Dashboard.module.scss';
import axios from 'axios';

import Chart from '../../components/UI/Chart/Chart';
import Button from '../../components/UI/Button/Button';
import Popup from '../../components/UI/Popup/Popup';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popupIsOpen: false,
			value: null,
			uid: 'yZAgN5fldYPUdbwrXpYtAuk0PYu2',
			userInfo: null,
			itemsArray: null
		};
	}

	componentDidMount = () => {
		axios
			.get(`https://banking-da534.firebaseio.com/users/${this.state.uid}.json`)
			.then((response) => {
				this.setState({
					userInfo: response.data
				});
				let arr = [];
				if (this.state.userInfo) {
					Object.keys(this.state.userInfo.outcome).map((item) => {
						arr.push(item);
					});
					this.setState({
						itemsArray: arr
					});
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	componentDidUpdate = () => {};

	toggleDisplay = (e) => {
		this.setState({
			popupIsOpen: true,
			value: e.target.value
		});
	};

	render() {
		let popup = null;
		if (this.state.popupIsOpen) {
			popup = <Popup value={this.state.value} popupIsOpen={this.state.popupIsOpen} />;
		}
		return (
			<div className={classes.Dashboarad}>
				<h1>Welcome to Dashboard</h1>
				<Chart items={this.state.itemsArray} />
				{popup}
				<Button onClick={this.toggleDisplay} value="income">
					Income
				</Button>
				<Button onClick={this.toggleDisplay} value="outcome">
					Outcome
				</Button>
			</div>
		);
	}
}

export default Dashboard;
