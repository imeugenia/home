const contentful = require("contentful");
import posts from "../data/posts.json";
import code from "../data/code.json";
import contacts from "../data/contacts.json";
import pics from "../data/pics.json";
import projects from "../data/projects.json";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_CODE = "FETCH_CODE";
export const FETCH_PICS = "FETCH_PICS";
export const FETCH_TEMP = "FETCH_TEMP";
export const FETCH_CONTACTS = "FETCH_CONTACTS";

const API_SPACE_ID = "cczllbmg75ay";
const API_KEY =
  "c1782ea2b12077bbc6f35d39d322af845aff60a0486717208c9803b520c28d9b";

const client = contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_KEY,
});

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
}

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
    payload: projects,
  };
}

export function fetchCode() {
  return {
    type: FETCH_CODE,
    payload: code,
  };
}

export function fetchPics() {
  return {
    type: FETCH_PICS,
    payload: pics,
  };
}
export function fetchContacts() {
  return {
    type: FETCH_CONTACTS,
    payload: contacts,
  };
}
