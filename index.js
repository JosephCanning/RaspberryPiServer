const express = require('express')
const app = express()
const port = 8480
const ip = '74.45.73.164'

app.use(express.static('public'));
app.use(express.static('website/dist'));

app.get('/', (req, res) => {
	res.send('/index.html');
});

app.listen(port, () => {
	console.log('Server up at http://' + ip + ':' + port + '/');
});
