const token = '145c261870f9d7f0f23270cd6eddca63d307143a'
const app = "I don't do much.";

fetch("https://api.github.com/achadha2/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
