import React, { Component } from 'react'
import '../index.css'

class TemperatureSpot extends Component {
    render() {
        const tempareture = "+18°C"
        return (
            <div className="col-1" style={{order: 4}}>
                <h4 style={{position: "absolute",  width: "200px"}}>It is {tempareture} where I am now</h4>
                <svg width='320' height='320' viewBox='-50 -50 320 320' xmlns='http://www.w3.org/2000/svg'>

                    <g id='Welcome' fill='none' fillRule='evenodd'>
                        <g id='Desktop-HD-Copy-11' transform='translate(-1104 -666)'>
                            <g id='Group-6' transform='translate(1067 640)'>
                                <g id='Oval'>
                                    <path fill='#ff6f56' 
                                    className='path' d={`M127.424919,265.34534 C200.759406,232.575561 263.060774,204.186898 252.91159,139.581548 C242.762405,74.9761979 196.122764,102.833329 127.424919,30.2630463 C58.7270734,-42.3072364 16.169606,24.1182093 1.93824743,139.581548 C-12.2931111,255.044886 54.0904309,298.115119 127.424919,265.34534 Z`} />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            
        )
    }
}

export default TemperatureSpot