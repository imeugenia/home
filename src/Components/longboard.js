import React, { Component } from 'react'
import '../index.css'
import bg from '../media/bg.svg'
import long from '../media/long.svg'

class Longboard extends Component {
    render() {
        return (
            <div className="col-2" id="longboard" style={{order: 10, border: '2px solid #00155c', background: `url(${bg}) no-repeat`,  height: "32rem", backgroundSize: 'auto 100%', textAlign: 'center'}}>
                <img src={long} alt="Longboard" style={{width: '21.6rem', marginTop: '22.9rem'}}/>
            </div>
        )
    }
}

export default Longboard