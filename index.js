const app = "I don't do much.";

fetch('https://api.github.com/users/hadley/orgs').
  then(res => res.json()).
  then(json => console.log(json))
