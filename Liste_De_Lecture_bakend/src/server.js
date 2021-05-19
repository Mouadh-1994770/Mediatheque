import express, { request } from 'express';

const app = express();
const pieces = {
    'Category1': {
    'piece1':'p1', id: 3254,
    'piece2':'p2', id: 5337,
    'piece3':'p3', id: 0012
    },
    'Category2': {
        'piece4':'p4', id: 564,
        'piece5':'p5', id: 987,
        'piece5':'p6', id: 145
     }
}
app.get('/api/pieces', (requete, reponse) => {
    reponse.status(200).json(pieces);
});

app.get('/api/pieces/:references', (requete, reponse) => {
    reponse.status(400).json(pieces);
});

app.get('/api/pieces/:id', (requete, reponse) => {
const id = requete.params.id;
    reponse.status(200).json(id);
});


app.listen(8000,()=>console.log('Ecoute le port 8000'));
