import React from 'react';

class Statistics extends React.Component {
    total = 0;
    positivePercentage = 0;
    

    percentage() {
        return (
            this.positivePercentage = 100 / this.total * this.state.good
        )
    };
    
    render() {
        return (
            <div>
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

export default Statistics;