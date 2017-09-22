import React, { Component } from 'react'
import myPhoto from '../media/jevgenija_sm.jpg'
import TemperatureSpot from './tempAnimation'
import Longboard from './longboard'
import posts from '../data/posts.json'
import '../index.css'


//TODO: fix scroll bar and media query bug in Chrome
class InfoGrid extends Component {

    getStyle = (item) => {
        const bgColor = item.bg ? "#ffded8" : ""
        const padding = item.bg ? "2rem" : "0"
        const style = {
            order: item.order,
            background: bgColor,
            padding: padding
        }
        return style
    }
    render() {
        const textPosts = posts.textPosts
        const CODE = posts.code
        const PICS = posts.pics
        const postList = textPosts.map( (item) => {
            const colNum = "col-" + item.col
            const style = this.getStyle(item)
            if ( item.header ) {
                return (
                    <div className={colNum}  
                    style={style} key={item.order}>
                        <h4><span className="red-text">{item.header}</span></h4>
                        <p>{item.text}</p>
                    </div>
                )
            }
            if ( item.quote ) {
                return (
                    <div className={colNum} 
                    style={style} key={item.order}>
                        <h2>{item.quote}</h2>
                    </div>
                )
            }
            return (
                <div className={colNum} 
                style={style} key={item.order}>
                    <h3><span className="red-text">{item.pretext}</span>{item.text}</h3>
                </div>
            )
            
        })
        const codeList = ( 
                <div className="col-1" style={{background: "#ffded8", order: 2, height: "32rem", padding: "2rem"}}>
                    <h3>
                        const <span className="red-text">{CODE.header}</span> =&nbsp;
                        <pre>
                            {JSON.stringify(CODE.text, undefined, 2)}
                        </pre>
                    </h3>
                    
                </div>  
        )
        const picList = PICS.map( (item) => {
            const colNum = "col-" + item.col
            const style = this.getStyle(item)
            return (
                <div className={colNum}  style={style} key={item.order}>
                    <img src={myPhoto} alt={item.alt} />
                </div>
            )
        })
        return (
            <div className="flexbox wrap">
                {postList}
                {codeList}
                {picList}
                <TemperatureSpot />
                <Longboard />
            </div>
        )
    }
}
export default InfoGrid