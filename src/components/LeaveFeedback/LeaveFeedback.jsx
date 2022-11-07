import React from 'react';
import {

} from './LeaveFeedback.styled'

class LeaveFeedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        visible: false,
    };

    total = 0;
    veryGood = 100;
    positivePercentage = 0;
    

    handleIncrement = () => { 
        this.setState({ visible: true });
        this.setState(prevState => ({
            good: prevState.good + 1,
        })); 
        this.total = this.total + 1
        this.positivePercentage = this.percentage();
    };

    handleIncrementNeutral = () => { 
        this.setState({ visible: true });
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
        this.total = this.total + 1
        this.positivePercentage = this.percentage();
    };

    handleIncrementBad = () => { 
        this.setState({ visible: true });
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
        this.total = this.total + 1
        this.positivePercentage = this.percentage();
    };

    percentage = () => {
        return (
            this.positivePercentage = ( this.veryGood / this.total ) * this.state.good
        )
    };

    // totalS() {
    //     return (
    //         this.total = this.state.good + this.state.neutral + this.state.bad
    //     )
    // };
    
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div> 
                    <button type="button" onClick={this.handleIncrement}>Good</button>
                    <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleIncrementBad}>Bad</button>
                </div>
                <h1>Statistics</h1>
                {this.state.visible && (
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
                        <span>Total:{this.total}</span>
                    </li>
                    <li>
                        <span>Positive feedback:{this.positivePercentage}%</span>
                    </li>
                </ul>
                </div>
                )}
                
            </div>
        )
    }
}

export default LeaveFeedback;

