import axios from "axios";
const contentful = require("contentful");

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_CODE = "FETCH_CODE";
export const FETCH_PICS = "FETCH_PICS";
export const FETCH_TEMP = "FETCH_TEMP";
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const FETCH_LOCATION = "FETCH_LOCATION";

const API_SPACE_ID = "cczllbmg75ay";
const API_KEY =
  "c1782ea2b12077bbc6f35d39d322af845aff60a0486717208c9803b520c28d9b";

const client = contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_KEY,
});

export function fetchPosts() {
  const request = client
    .getEntries({
      content_type: "card",
    })
    .then((entries) => {
      return entries;
    });
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function fetchProjects() {
  const request = client
    .getEntries({
      content_type: "projects",
    })
    .then((entries) => {
      return entries;
    });
  return {
    type: FETCH_PROJECTS,
    payload: request,
  };
}

export function fetchCode() {
  const request = client
    .getEntries({
      content_type: "code",
    })
    .then((entries) => {
      return entries;
    });
  return {
    type: FETCH_CODE,
    payload: request,
  };
}

export function fetchPics() {
  const request = client
    .getEntries({
      content_type: "pics",
    })
    .then((entries) => {
      return entries;
    });
  return {
    type: FETCH_PICS,
    payload: request,
  };
}
export function fetchContacts() {
  const request = client
    .getEntries({
      content_type: "contacts",
    })
    .then((entries) => {
      return entries;
    });
  return {
    type: FETCH_CONTACTS,
    payload: request,
  };
}

export function fetchLocation() {
  const request = client
    .getEntries({
      content_type: "location",
    })
    .then((entries) => {
      return entries;
    });
  return {
    type: FETCH_LOCATION,
    payload: request,
  };
}
