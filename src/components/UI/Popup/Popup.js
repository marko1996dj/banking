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

	post = () => {
		
	}

	render() {
		let popup = null;

		let income = (
			<div style={{ display: this.state.display }} className={classes.Popup}>
				<div className={classes.InnerPopup}>
					<div className={classes.Input}>
						<InputField type="textarea" label="Amount" />
						<span>$</span>
					</div>
					<form>
						<InputField type="radio" name="income" label="Salary" value="salary" />
						<InputField type="radio" name="income" label="Deposits" value="deposits" />
						<InputField type="radio" name="income" label="Savings" value="savings" />
					</form>
					<Button value="general">Save</Button>
					<p onClick={this.closePopup}>Close me</p>
				</div>
			</div>
		);

		const expenses = [
			'Bills',
			'Car',
			'Clothes',
			'Communication',
			'Eating out',
			'Entertainment',
			'Food',
			'Gifts',
			'Health',
			'House',
			'Pets',
			'Sports',
			'Taxi',
			'Toiletry',
			'Transport'
		];

		const expense = expenses.map((item, index) => (
			<InputField type="radio" name="outcome" label={item} value={item} key={index} />
		));

		let outcomeStyle = {
			display: 'flex',
			flexWrap: 'wrap'
		};

		let outcome = (
			<div style={{ display: this.state.display }} className={classes.Popup}>
				<div className={classes.InnerPopup}>
					<div className={classes.Input}>
						<InputField label="Amount" />
						<span>$</span>
					</div>
					<form style={outcomeStyle}>{expense}</form>
					<Button onClick={this.post} value="general">Save</Button>
					<p onClick={this.closePopup}>Close me</p>
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
