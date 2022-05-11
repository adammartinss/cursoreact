import express from 'express';

const app = express();

app.use(express.json());
// get, post, put, patch, delete
// get = buscar info
// post = cadastrar info
// put = atualizar info de uma entdd
// patch = atualizar uma infounica de uma entdd
// delete = delte

app.use(routes)

app.listen(3333, () => {
    console.log('HTTP server running!');
});
