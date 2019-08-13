import React, { Component } from 'react'
import classes from './Dashboard.module.scss';

import Chart from '../../components/UI/Chart/Chart';
import Button from '../../components/UI/Button/Button';
import Popup from '../../components/UI/Popup/Popup';

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            popupIsOpen: false,
            value: null
        }
    }

    toggleDisplay = (e) => {
        this.setState({
            popupIsOpen: true,
            value: e.target.value,
        })
    }

    render() {
        let popup = null;
        if(this.state.popupIsOpen) {
            popup = <Popup value={this.state.value} popupIsOpen={this.state.popupIsOpen}/>
        }

        return(
            <div className={classes.Dashboarad}>
                <h1>
                    Welcome to Dashboard
                </h1>
                <Chart />
                {popup}
                <Button onClick={this.toggleDisplay} value="income">Income</Button>
                <Button onClick={this.toggleDisplay} value="outcome">Outcome</Button>
            </div>
        );
    }
}

export default Dashboard;