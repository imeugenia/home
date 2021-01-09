import React, { Component } from "react";
import "../index.css";
import { fetchContacts } from "../actions/index";
import { connect } from "react-redux";
import { getItems } from "../generics";

class Contact extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts } = this.props;
    const contactList = getItems(contacts);
    const myContacts = contactList[0];
    return (
      <div>
        {contactList.length > 0 ? (
          <footer>
            <div className="title flexbox">
              <div className="inner-title" style={{ maxWidth: "68rem" }}>
                <h2 style={{ color: "#ff6f56" }}>{myContacts.header}</h2>
                <div style={{ marginTop: "8rem" }}>
                  <a target="_blank" href={myContacts.linkedin}>
                    <span
                      className="like-h4"
                      style={{ color: "#ff6f56", marginRight: "2rem" }}
                    >
                      Linkedin
                    </span>
                  </a>
                  <a target="_blank" href={myContacts.twitter}>
                    <span
                      className="like-h4"
                      style={{ color: "#ff6f56", marginRight: "2rem" }}
                    >
                      Twitter
                    </span>
                  </a>
                  <a href={`mailto:${myContacts.email}`}>
                    <span
                      className="like-h4"
                      style={{ color: "#ff6f56", marginRight: "2rem" }}
                    >
                      Email
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.data.contacts,
  };
}
export default connect(mapStateToProps, { fetchContacts })(Contact);
