import React from 'react';

import classes from './InputField.module.scss';

const inputField = (props) => {
	let inputElement = null;
	switch (props.typeOfInput) {
		case 'input':
			inputElement = <input className={classes.InputElement} {...props} />;
			break;
		case 'textarea':
			inputElement = <textarea className={classes.InputElement} {...props} />;
			break;
		default:
			inputElement = <input className={classes.InputElement} {...props} />;

			return (
				<div className={classes.InputField}>
					<div className={classes.Label}>
						<label>{props.label}</label>
					</div>
					{inputElement}
				</div>
			);
	}
};
export default inputField;
