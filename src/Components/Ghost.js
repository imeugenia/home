import React, {Component} from 'react';
import ghostImg from '../media/my-ghost.svg'

class Ghost extends Component {
    render() {
        const { order, colNum, ghostClass } = this.props;
        return (
            <div className={`col-${colNum}`} style={{order: order}}>
                <img className={ghostClass} src={ghostImg} alt="ghost" style={{opacity: 0.5}}/>
            </div>
        );
    }
}

export default Ghost;