import React from 'react';


class Dropdown extends React.Component {
    state = {
        visible: false,
    };

    show = () => {
        this.setState({ visible: true });
    };

    render() {
        return (
            <div>
                <button type="button" onClick={this.show}>OK</button>
                {this.state.visible && (
                    <div>drop</div>
                )}
            </div>
        )
    }

}

export default Dropdown;