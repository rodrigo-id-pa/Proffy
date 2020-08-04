import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);


//GET: Buscar ou listar informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (request body): dados para criação ou atualização de registro
//Route params: identificar qual recurso eu quero atualizar ou deletar 
//Query params: paginação

/*

app.get('/users', (request, response) => {
	console.log(request.body);

	const users = [
	{name: 'diego', age: 25}
	];


	return response.json(users);
});

*/

/* app.delete('/users/:id', (request, response) => {
	console.log(request.params);

	const users = [
	{name: 'diego', age: 25}
	];


	return response.json(users);
}); 

app.listen(3333); */