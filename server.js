const express = require("express");
const path = require('path')

const app = express();

app.get('/', (req, res) => {
	res.send({message: "Hello Meow"}) //text, html, json
})

app.get('/baba', (req,res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})



const server = app.listen(8000, () => 
	console.log(`Server is running on port 8000`))

