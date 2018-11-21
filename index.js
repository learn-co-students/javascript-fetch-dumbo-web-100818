const token = "1dd70fa59952c97a545b68f96b3adfb409e46b1a"

fetch('https://api.github.com/ws903/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json))