const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// prima rotta
app.get('/', (req, res) => {
    res.send(`<h1>server del mio blog</h1>`);
})

// seconda rotta
app.get('/bacheca', (req, res) => {
    const posts = [
        {
            titolo: "come cucinare un ciambellone",
            contenuto: "ciambellone",
            immagine: "http://localhost:3000/img/ciambellone.jpeg",
            tags: ["dolci", "ciambella", "preparazione"]
        },

        {
            titolo: "come cucinare cracker e barbabietola",
            contenuto: "cracker e barbabietola",
            immagine: "http://localhost:3000/img/cracker_barbabietola.jpeg",
            tags: ["salati", "cracker", "barbabietola", "preparazione"]
        },

        {
            titolo: "come cucinare il pane fritto dolce",
            contenuto: "pane fritto dolce",
            immagine: "http://localhost:3000/img/pane_fritto_dolce.jpeg",
            tags: ["dolci", "pane", "fritto", "dolce", "preparazione"]
        },

        {
            titolo: "come cucinare pasta e barbabietola",
            contenuto: "pasta e barbaietola",
            immagine: "http://localhost:3000/img/pasta_barbabietola.jpeg",
            tags: ["salati", "pasta", "barbabietola", "preparazione"]
        },

        {
            titolo: "come cucinare una torta paesana",
            contenuto: "torta paesana",
            immagine: "http://localhost:3000/img/torta_paesana.jpeg",
            tags: ["dolci", "torta", "paesana", "preparazione"]
        },
    ];

    res.json(posts);
})

// partenza dal server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})