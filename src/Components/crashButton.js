import React, {Component} from 'react'

class CrashButton extends Component {
    handleClick = () => {
        this.props.scramble()
    }
    render() {
        return (
            <div className="col-1" style={{background: "#ffded8", order: 9, height: "32rem"}}>
                <div id="crash-button" onClick={this.handleClick}>
                    <span id="crash-button-text">Do not press</span>
                </div>
            </div>
        )
    }
}

export default CrashButton