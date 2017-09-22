import React, { Component } from 'react'
import Title from './Title'
import '../index.css'
import posts from '../data/posts.json'


class Projects extends Component {
    render() {
        const title = "My projects and experience"
        const projects = posts.projects
        return (
            <section>
                <Title title={title}/>
                <div className="flexbox wrap">
                    {projects.map( item => {
                        
                        return item.link ? (
                            <div className="col-1" 
                                    key={item.title}>
                                <h4>
                                    <a href={item.link} target="_blank">
                                        <span className="red-text">{item.title}
                                        </span>
                                    </a><br/>
                                    {item.year}</h4>
                                <p>{item.text}</p>
                            </div>
                            
                        ) : (
                            
                            <div className="col-1" 
                                    key={item.title}>
                                <h4><span className="red-text">{item.title}
                                    </span><br/>
                                    {item.year}</h4>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            
        )
    }
}

export default Projects