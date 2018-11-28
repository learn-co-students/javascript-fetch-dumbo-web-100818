const token = '30fd37d051942c0fb12cf5b452948d6aa5227140'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
