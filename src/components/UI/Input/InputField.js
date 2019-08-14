import React from 'react';

import classes from './InputField.module.scss';

const inputField = (props) => {
	let inputElement = null;
	switch (props.typeOfInput) {
		case 'input':
			inputElement = <input type="input" className={classes.InputElement} {...props} />;
			break;
		case 'textarea':
			inputElement = <textarea className={classes.InputElement} {...props} />;
			break;

		case 'radio':
			inputElement = <input type="radio" className={classes.InputElement} {...props} />;
			break;
		default:
			inputElement = <input className={classes.InputElement} {...props} />;

			let radio = (
				<div className={classes.InputField}>
					<div className={classes.Label}>
						<label>{props.label}</label>
					</div>
					{inputElement}
				</div>
			);

			if (props.type === 'radio') {
				radio = (
					<div className={classes.InputField}>
						{inputElement}
						<div className={classes.Label}>
							<label>{props.label}</label>
						</div>
					</div>
				);
			}

			return radio;
	}
};
export default inputField;
