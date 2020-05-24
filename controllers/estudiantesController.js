//estudiantesController.js (CONTROL DE LOS MODELOS DE LA BASE DE DATOS)
let {Estudiante} = require ('../models/database/db');
const jobControl ={};

//muestra todos los estudiantes GET
jobControl.getAllEstudiante = async (req, res)=>{
     console.log("Entro");//para ver si entra al código
     await Estudiante.findAll().then((estudiantes) =>{
          res.status(200).json(estudiantes);
     }).catch(err =>{
          res.status(500).json({error: "No encontrado"});
     });
}
//muestra estudiante por ID de la primary key MySQL (findByPk) GET ID
jobControl.getEstudiante = async(req, res)=>{
     console.log("Entro");//para ver si entra al código
     console.log(req.params.id);//para ver la peticion
     await Estudiante.findByPk(req.params.id).then((estudiante) => {
          res.status(200).json(estudiante);
     }).catch(err => {
          res.status(500).json({error: "No encontrado"});
     });
}

//Muestra estudiante por MATRICULA GET
// jobControl.getEstudiante = async (req , res) =>{
//     // const { matricula } = req.params.matricula; // diferencia entre req.params y req.body
//
//      await db.Estudiante.findOne( {
//           where: {
//                matricula // en vez de id puede ser matricula
//           }
//      } ).then( (Estudiante) => {
//           console.log(Estudiante); // a manera de test
//           res.json({ // en caso de encontrar retornara el estudiante con ese id
//                data: Estudiante
//           })
//      }).catch( (err) => {
//           console.log(err);
//      });
// };

//muestra estudiante por MATRICULA GET
jobControl.getEstudianteMatricula = async(req, res)=>{
     console.log("Entro");//para ver si entra al código
     console.log(req.params.matricula);//para ver la peticion
     await Estudiante.findOne(req.params.matricula).then((estudiante) => {
          res.status(200).json(estudiante);
     }).catch(err => {
          res.status(500).json({error: "No encontrado"});
     });
}
//crea estudiante POST
jobControl.createEstudiante = async (req, res)=> {
     console.log("Entro");//para ver si entra al código
     console.log(req.body);//para ver cuerpo de la petición
     let r = Estudiante.add(req.body);
     if (r) {
          res.send(200).json(r, {message: 'Se agrego estudiante'});
     } else {
          res.status(500).json({error: "No se pudo crear"});
     }
}
//actualiza estudiante PATCH
jobControl.updateEstudiante = async (req, res)=>{
     console.log("Entro");//para ver si entra al código
     let r = await Estudiante.save(req.params.id, req.body);
     if(r){
          res.status(200).json(r);
     }else{
          res.status(500).json({error: "No existe"});
     }
}
//borra estudiante DELETE
jobControl.deleteEstudiante = function(req, res){
     console.log("Entro");//para ver si entra al código
     if(Estudiante.findByPk(req.params.id)){
          res.status(200).json({msg: `id: ${req.params.id} deleted succesfully`})
     }else{
          res.status(500).json({error: `could not delete id: ${req.params.deleteEstudiante}`});
     }
}
module.exports = jobControl;//exporta todos





















// const estudiantes = [
//      {id: "001", matricula: "01142739", nombre: "karen", semestre: 7, creditos: 280},
//      {id: "002", matricula: "01132739", nombre: "karla", semestre: 8, creditos: 280},
//      {id: "003", matricula: "01132738", nombre: "abner", semestre: 8, creditos: 280},
//      {id: "004", matricula: "01142736", nombre: "juan", semestre: 7, creditos: 280},
//      {id: "005", matricula: "01142734", nombre: "lugo", semestre: 7, creditos: 280}];
//
// const findById = function (id) {
//      return estudiantes.find((e) => {
//           return e.id == id;
//      });
// };
//
// const findByMatricula = function (matricula) {
//      return estudiantes.find((e) => {
//           return e.matricula == matricula;
//      });
// };
// const findAll = function() {
//      return estudiantes;
// };
//
// exports.findById = findById;
// exports.findByMatricula = findByMatricula;
// exports.findAll = findAll;


