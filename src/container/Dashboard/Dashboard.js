import React, { Component } from 'react'
import classes from './Dashboard.module.scss';

import Chart from '../../components/UI/Chart/Chart';
import Button from '../../components/UI/Button/Button';

class Dashboard extends Component {

    redirectToSpendings = () => {
        this.props.history.push('/spendings');
    }

    render() {


        return(
            <div className={classes.Dashboarad}>
                <h1>
                    Welcome to Dashboard
                </h1>
                <Chart />
                <Button onClick={this.redirectToInput}>Input Data</Button>
            </div>
        );
    }
}

export default Dashboard;