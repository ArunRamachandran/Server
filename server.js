const express = requires('express');
const app = express();
const port = process.env.PORT || 5000;

//console.log that your server is up & running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/test', (req, res) => {
    res.send({ express: 'WE will do it  :) ' });
})