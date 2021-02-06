const contentful = require("contentful");
const fs = require("fs");

const API_SPACE_ID = "cczllbmg75ay";
const API_KEY =
  "c1782ea2b12077bbc6f35d39d322af845aff60a0486717208c9803b520c28d9b";

const client = contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_KEY,
});

const writeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

const fetchPosts = async () => {
  const response = await client
    .getEntries({
      content_type: "card",
    })
    .then((entries) => {
      return entries;
    });

  writeData(response, "./src/data/posts.json");
};

const fetchProjects = async () => {
  const response = await client
    .getEntries({
      content_type: "projects",
    })
    .then((entries) => {
      return entries;
    });

  writeData(response, "./src/data/projects.json");
};

const fetchCode = async () => {
  const response = await client
    .getEntries({
      content_type: "code",
    })
    .then((entries) => {
      return entries;
    });
  writeData(response, "./src/data/code.json");
};

const fetchPics = async () => {
  const response = await client
    .getEntries({
      content_type: "pics",
    })
    .then((entries) => {
      return entries;
    });
  writeData(response, "./src/data/pics.json");
};

const fetchContacts = async () => {
  const response = await client
    .getEntries({
      content_type: "contacts",
    })
    .then((entries) => {
      return entries;
    });

  writeData(response, "./src/data/contacts.json");
};

fetchPosts();
fetchProjects();
fetchCode();
fetchContacts();
fetchPics();
