import React, { Component } from 'react'
import '../index.css'
import posts from '../data/posts.json'


class Contact extends Component {
    render() {
        const title = "Say hello to me!"
        const contacts = posts.contacts
        return (
            <footer>
                <div className="title flexbox">
                    <div style={{maxWidth: "68rem"}} >
                        <a style={{textDecoration: "none"}} href={`mailto:${contacts.email}`}>
                            <h2 style={{color: "#ff6f56"}}>{title}</h2>
                        </a>
                    </div>   
                </div>
            </footer>
        )
    }
}

export default Contact