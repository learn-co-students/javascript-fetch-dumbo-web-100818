const token = "406c1edf7b9aa9957871789d6a94cf0ab4fa7d76";
fetch('https://api.github.com/mattdizon/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json))
