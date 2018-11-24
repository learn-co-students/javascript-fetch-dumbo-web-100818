

document.addEventListener("DOMContentLoaded", (e)=>{

  let getRepos = document.getElementById("getRepos")
  getRepos.addEventListener("click", (e)=>{
      getLearnRepos();
  })



})

function getLearnRepos() {
  fetch('#')
  .then(res => res.json())
  .then(json => loadRepos(json))
  .catch(err => console.log(err))
}

function loadRepos(givenJson) {
  givenJson.forEach((e)=>{
    addToFile(e)
  })
}

function addToFile(givenObject) {
  const ul = document.getElementById("repoList")
  const newLi =`--------------------------------------
                <li>  Name: ${givenObject.name}</li>
                <li>  Forks: ${givenObject.forks}</li>
                <li> URL: <a href="${givenObject.html_url}"> Click Me</a></li>
                --------------------------------------`;
  ul.innerHTML += newLi;
}
