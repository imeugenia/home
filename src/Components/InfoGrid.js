import React, { Component } from 'react'
import TemperatureSpot from './tempAnimation'
import Longboard from './longboard'
import posts from '../data/posts.json'
import { fetchPosts, fetchCode, fetchPics } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../index.css'


//TODO: fix scroll bar and media query bug in Chrome
class InfoGrid extends Component {
    componentWillMount() {
        this.props.fetchPosts(),
        this.props.fetchCode(),
        this.props.fetchPics()
    }
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
        const textPosts = this.props.posts.map( item => {
            return item.fields
        })
        const code = this.props.code.map( item => {
            return item.fields
        })
        const pics = this.props.pics.map( item => {
            return item.fields
        })
        ///
        const postList = textPosts.map( (item) => {
            const colNum = "col-" + item.col
            const style = this.getStyle(item)
            if ( item.title ) {
                return (
                    <div className={colNum}  
                    style={style} key={item.order}>
                        <h4><span className="red-text">{item.title}</span></h4>
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
                    <h3><span className="red-text">{item.pretext} </span>{item.text}</h3>
                </div>
            )
            
        })
        const codeList = code.map( item => {
            return (
                <div className="col-1" style={{background: "#ffded8", order: 2, height: "32rem", padding: "2rem"}}>
                    <h3>
                        const <span className="red-text">{item.header}</span> =&nbsp;
                        <pre>
                            {JSON.stringify(item.text, undefined, 2)}
                        </pre>
                    </h3>
                </div>
            )
        })
                  
        
        const picList = pics.map( (item) => {
            const colNum = "col-" + item.col
            const style = this.getStyle(item)
            return (
                <div className={colNum}  style={style} key={item.order}>
                    <img src={item.link.fields.file.url} alt={item.alt} />
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
// export default InfoGrid

function mapStateToProps(state) {
    return { 
        posts: state.data.posts,
        pics:  state.data.pics,
        code:  state.data.code,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: bindActionCreators(fetchPosts, dispatch),
        fetchCode: bindActionCreators(fetchCode, dispatch),
        fetchPics: bindActionCreators(fetchPics, dispatch),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(InfoGrid)