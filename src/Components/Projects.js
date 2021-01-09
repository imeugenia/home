import React, { Component } from "react";
import Title from "./Title";
import "../index.css";
import { fetchProjects } from "../actions/index";
import { connect } from "react-redux";
import orderBy from "lodash/orderBy";

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    const title = "My projects and experience";
    let projects = this.props.projects.map((item) => {
      return item.fields;
    });
    projects = orderBy(projects, ["year"], ["desc"]);
    return (
      <section>
        <Title title={title} />
        <div className="flexbox wrap">
          {projects.map((item) => {
            return item.link ? (
              <div className="col-1" key={item.title}>
                <h4>
                  <a href={item.link} target="_blank">
                    <span className="red-text">{item.title}</span>
                  </a>
                  <br />
                  {item.year}
                </h4>
                <p>{item.text}</p>
              </div>
            ) : (
              <div className="col-1" key={item.title}>
                <h4>
                  <span className="red-text">{item.title}</span>
                  <br />
                  {item.year}
                </h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

// export default Projects

function mapStateToProps(state) {
  return { projects: state.data.projects };
}
export default connect(mapStateToProps, { fetchProjects })(Projects);
