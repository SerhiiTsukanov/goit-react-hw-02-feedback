import React from 'react';
import {

} from './LeaveFeedback.styled'

class LeaveFeedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = () => { };

    handleDecrement = () => { };
    
    render() {
        return (
            <div>
            <h1>Please leave feedback</h1>
            <div> 
                <button type="button" onClic={this.handleIncrement}>{this.state.good}</button>
                <button type="button" onClic={this.handleIncrement}>{this.state.neutral}</button>
                <button type="button" onClic={this.handleIncrement}>{this.state.bad}</button>
                </div>
            </div>
        )
    }
}

export default LeaveFeedback;