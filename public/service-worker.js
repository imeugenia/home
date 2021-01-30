self.addEventListener("fetch", (event) => {
  console.log(event.request); //"https://cdn.contentful.com";
});
