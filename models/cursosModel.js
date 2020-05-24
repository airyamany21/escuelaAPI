//cursosModel.js (MODELO PARA LA BASE DE DATOS)
const db = require ('../models/database/db');

async function findAll(){
	let cursos = await db.Curso.findAll();
	return cursos;
}
async function findById(identificador){
	let curso = await db.Curso.findAll(
	{
		where:
		{
			id:identificador
		}
	});
	return curso;
}
async function findByClave(cl){
	let curso = await db.Curso.findAll({
		where:
		{
			clave:cl
		}
	});
	return curso;
}
async function add (body){
	let curso = await db.Curso.create(
	{
		id:	body.id,
		nombre: body.nombre,
		clave: body.clave,
		creditos:body.creditos
	});
	return curso;
	
}
async function savePut (body,identificador){
	let curso = await db.Curso.update(
	{ 
		id:	body.id,
		nombre: body.nombre,
		clave: body.clave,
		creditos:body.creditos
	}, 
	{ where: 
		{ 
			id: identificador 
		} 
	});
	return curso;
}
async function erase (identificador,response){
	let curso = await db.Curso.destroy(
	{ where: 
		{ id: identificador
		} 
	});
	return curso;
}

exports.findAll=findAll;
exports.findById=findById;
exports.findByClave=findByClave;
exports.add=add;
exports.savePut=savePut;
exports.erase=erase;

