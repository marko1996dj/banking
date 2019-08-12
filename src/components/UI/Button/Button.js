import React from 'react';

import classes from './Button.module.scss';

const button = ( props ) => (
    <div className={classes.Button}>
        <button {...props}>{props.children}</button>
    </div>
)

export default button;