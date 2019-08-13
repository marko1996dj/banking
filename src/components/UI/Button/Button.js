import React from 'react';

import classes from './Button.module.scss';

console.log(classes);

const button = ( props ) => {




    return (
        <div className={classes.Button}>
            <button {...props}>{props.children}</button>
        </div>
    )
}

export default button;