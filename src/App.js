import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './Components/header'
import InfoGrid from './Components/InfoGrid'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { fetchPosts } from './actions/index'
// import { contentful } from 'contentful'
const contentful = require('contentful')

class App extends Component {
  // state = {
  //   postsTest: []
  // }
  getData = () => {
    let array = []
    const SPACE_ID = 'cczllbmg75ay'
    const ACCESS_TOKEN = 'c1782ea2b12077bbc6f35d39d322af845aff60a0486717208c9803b520c28d9b'
    
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    })

    client.getEntries({
      'content_type': 'card'
    })
    .then(function (entries) {
      console.log(entries)
        entries.items.forEach(function (entry) {
          array.push(entry.fields)
        })
      console.log(array)
    })
    this.setState({postsTest: array})
  }
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div>
        <Header />
        <InfoGrid />
        <Projects />
        <Contact />
      </div>
    );
  }
}

// export default App
function mapStateToProps(state) {
  return { posts: state.posts.all }
}
export default connect(mapStateToProps, { fetchPosts })(App)