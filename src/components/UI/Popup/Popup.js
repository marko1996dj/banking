import React, { Component } from 'react';
import classes from './Popup.module.scss';

import InputField from '../Input/InputField';
import Button from '../Button/Button';

class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'block'
		};
	}

	closePopup = () => {
		this.setState({
			display: 'none'
		});
	};

	render() {
		let popup = null;

		let income = (
			<div style={{ display: this.state.display }} className={classes.Popup}>
				<div className={classes.InnerPopup}>
					<InputField label="Mandatory" />
					<InputField label="Food" />
					<InputField label="Miscellaneous" />
					<InputField label="Gaming" />
					<InputField label="Savings" />
					<Button value="general">Save</Button>
					<p onClick={this.closePopup}>Close me!</p>
				</div>
			</div>
		);

		let outcome = (
			<div style={{ display: this.state.display }} className={classes.Popup}>
				<div className={classes.InnerPopup}>
					<InputField label="Mandatory" />
					<InputField label="Food" />
					<InputField label="Miscellaneous" />
					<InputField label="Gaming" />
					<InputField label="Savings" />
					<Button value="general">Save</Button>
					<p onClick={this.closePopup}>Close me! bitch</p>
				</div>
			</div>
		);

		if (this.props.value === 'income') {
			popup = income;
		} else {
			popup = outcome;
		}

		return <div>{popup}</div>;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.popupIsOpen) {
			this.setState({
				display: 'block'
			});
		} else {
			this.setState({
				display: 'none'
			});
		}
	}
}

export default Popup;
