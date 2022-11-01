import React from 'react';
import {

} from './LeaveFeedback.styled'

class LeaveFeedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };




    handleIncrementGood = () => { 
        this.setState(prevState => ({
            good: prevState.good + 1,
            
        }));
        
    };

     handleIncrementNeutral = () => { 
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

     handleIncrementBad = () => { 
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    
    
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div> 
                    <button type="button" onClick={this.handleIncrementGood}>good</button>
                    <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleIncrementBad}>Bad</button>
                </div>
                <h1>Statistics</h1>
                <div class="drop__statistics">
                <ul>
                    <li>
                        <span>Good:{this.state.good}</span>
                    </li>
                    <li>
                        <span>Neutral:{this.state.neutral}</span>
                    </li>
                    <li>
                        <span>Bad:{this.state.bad}</span>
                    </li>
                    <li>
                        <span>Total:{}</span>
                    </li>
                    <li>
                        <span>Positive feedback:{this.countPositiveFeedbackPercentage}</span>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}

export default LeaveFeedback;