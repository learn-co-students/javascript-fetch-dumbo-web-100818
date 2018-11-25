const app = "I don't do much.";

const token = '###';
fecth ('https://api.github.com/user/repos', {
  headers:{
    Autorization: `token ${token}`
  }

}).then(res => res.json()).then(json => console.log(json))
