let url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
fetch(url)
  .then((result) => {
    console.log(result);
    return result.json();
  })
  .then((json) => {
    console.log(json);
    callback(null, json);
  })
  .catch((error) => {
    callback(error, null);
  });
async function fetchUsers(callback) {
    let fetchPromise = await fetch(url);
}

fetchUsers((error, users) => {
  if (error) {
  }
});
