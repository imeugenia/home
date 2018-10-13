import React, { Component } from 'react'
import '../index.css'

class Title extends Component {
  render() {
    const style = {
      color: this.props.color || '#00155c'
    }
    return (
      <div className="title flexbox">
        <div className="inner-title" style={{ maxWidth: '68rem' }}>
          <h2 style={style}>{this.props.title}</h2>
        </div>
      </div>
    )
  }
}

export default Title
