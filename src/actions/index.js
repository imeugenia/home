import axios from 'axios'
const contentful = require('contentful')

export const FETCH_POSTS = 'FETCH_POSTS'


const API_BASE_URL = 'https://cdn.contentful.com'
const API_SPACE_ID = 'cczllbmg75ay'
const API_KEY = 'c1782ea2b12077bbc6f35d39d322af845aff60a0486717208c9803b520c28d9b'

const client = contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_KEY
})

export function fetchPosts() {
  const request = client.getEntries({
    'content_type': 'card'
  })
  .then(function (entries) {
      return entries
  })
  return {
    type: FETCH_POSTS,
    payload: request
  }
}