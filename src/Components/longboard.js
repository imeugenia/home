import React, { Component } from 'react'
import '../index.css'
import bg from '../media/bg.svg'
import longPart1 from '../media/long-part1.svg'
import longPart2 from '../media/long-part2.svg'

class Longboard extends Component {
    render() {
        return (
            <div className="col-1" id="longboard" style={{order: 11, border: '2px solid #00155c', background: `url(${bg}) no-repeat`,  height: "32rem", backgroundSize: 'auto 100%', textAlign: 'center', position: "relative"}}>
                <img  src={longPart1} alt="Longboard" style={{width: '21.6rem', marginTop: '22.9rem'}}/>
                <img className="wheel" id="wheel1" src={longPart2} alt="Longboard" />
                <img className="wheel" id="wheel2" src={longPart2} alt="Longboard"/>
            </div>
        )
    }
}

export default Longboard