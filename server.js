const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/MILKBANK_CPY'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/MILKBANK_CPY/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);
