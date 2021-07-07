self.addEventListener("fetch", function (event) {
  if (event.request.url.match(/cdn.contentful.com/)) {
    event.respondWith(
      caches.open("imeugenia").then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return (
            response ||
            fetch(event.request).then(function (response) {
              cache.put(event.request, response.clone());
              return response;
            })
          );
        });
      })
    );
  }
});
