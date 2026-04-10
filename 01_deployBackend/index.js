const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

const githubData = {
"login": "prabhatyadav4",
"id": 180170168,
"node_id": "U_kgDOCr0tuA",
"avatar_url": "https://avatars.githubusercontent.com/u/180170168?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/prabhatyadav4",
"html_url": "https://github.com/prabhatyadav4",
"followers_url": "https://api.github.com/users/prabhatyadav4/followers",
"following_url": "https://api.github.com/users/prabhatyadav4/following{/other_user}",
"gists_url": "https://api.github.com/users/prabhatyadav4/gists{/gist_id}",
"starred_url": "https://api.github.com/users/prabhatyadav4/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/prabhatyadav4/subscriptions",
"organizations_url": "https://api.github.com/users/prabhatyadav4/orgs",
"repos_url": "https://api.github.com/users/prabhatyadav4/repos",
"events_url": "https://api.github.com/users/prabhatyadav4/events{/privacy}",
"received_events_url": "https://api.github.com/users/prabhatyadav4/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Prabhat Kumar",
"company": null,
"blog": "https://www.linkedin.com/in/prabhat-kumar-95059531a/",
"location": "Muzaffarpur, Bihar",
"email": null,
"hireable": true,
"bio": "BTech CSE @OCT’27 🎓 | C++ | Python | MERN Stack Developer ",
"twitter_username": null,
"public_repos": 21,
"public_gists": 1,
"followers": 7,
"following": 7,
"created_at": "2024-09-02T10:04:43Z",
"updated_at": "2026-03-31T14:41:11Z"
}

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/twitter', (req, res) => {
    res.send("Twitter is now become X")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at Chai Aur Code</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h1>Chai Aur Code</h1>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})