import React from 'react';
import {

} from './LeaveFeedback.styled'

class LeaveFeedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleIncrement = () => { 
        this.setState({

        })
    };

    handleDecrement = () => { };
    
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div> 
                    <button type="button" onClic={this.handleIncrement}>Good</button>
                    <button type="button" onClic={this.handleIncrement}>Neutral</button>
                    <button type="button" onClic={this.handleIncrement}>Bad</button>
                    </div>
                <h1>Statistics</h1>
                <ul>
                    <li>
                        <span>Good:{this.state.good}</span>
                    </li>
                    <li>
                        <span>Good:{this.state.neutral}</span>
                    </li>
                    <li>
                        <span>Good:{this.state.bad}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeaveFeedback;