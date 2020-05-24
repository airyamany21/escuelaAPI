//cursoController.js (CONTROL DE LOS MODELOS DE LA BASE DE DATOS)
let {Curso} = require ('../models/database/db');
// const Sequelize = require('sequelize');
const jobControl2 ={};

//muestra todos los cursos GET
jobControl2.getAllCursos = function (req,res){
	console.log("Entro");//para ver si entra al código
	if(req.query.clave){
		Curso.findByClave(req.query.clave).then((curso) =>
		{
			res.status(200).send(curso);
		}).catch(err =>
		{
			res.status(500).send(`No se encontro el Curso `);		
		});
	}else{
		Curso.findAll().then((cursos) =>{
			res.status(200).send(cursos);
		}).catch(err =>
		{
			res.status(500).send('No se encontraron Cursos');
		});
	}
}
//muestra curso por ID de la primary key MySQL (findByPk) GET ID
jobControl2.getCurso = function (req,res){
	console.log("Entro");//para ver si entra al código
	Curso.findByPk(req.params.id).then((curso) =>{
		res.status(200).send(curso);
	}).catch(err =>
	{
		res.status(500).send(`No se encontro el Curso `);
	});
}
//crea curso POST
jobControl2.createCurso = function (req,res){
    console.log(req.body);
	modelo.add(req.body).then((curso)=>{
		res.status(200).send(`Se creo el curso exitosamente`);	
	}).catch(err =>{
		res.status(500).send(`No se pudo agregar el Curso: ${req.body}`);	
	});
}
//actualiza estudiante PUT
jobControl2.updateCursoPut = function (req,res){
	modelo.savePut(req.body,req.params.id).then((curso)=>
	{
		res.status(200).send(`Se modifico el curso exitosamente`);
	}).catch(err =>
	{
		res.status(500).send(`No se pudo modificar el Curso: ${req.params.id}`);
	});
}
//borra curso DELETE
jobControl2.deleteCurso = function (req,res){
	modelo.erase(req.params.id).then((curso)=>
	{
		res.status(200).send(curso);
	}).catch(err =>
	{
		res.status(500).send(`No se pudo eliminar el curso : ${req.params.id}`);
	});
}
module.exports = jobControl2;//exporta todos