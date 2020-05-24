//index.js (RUTAS)
const express = require ('express');
const router = express.Router();

const {getAllEstudiante} = require ('../controllers/estudiantesController');
const {getEstudiante} = require ('../controllers/estudiantesController');
const {getEstudianteMatricula} = require ('../controllers/estudiantesController');
const {createEstudiante} = require ('../controllers/estudiantesController');
const {updateEstudiante} = require ('../controllers/estudiantesController');
const {deleteEstudiante} = require ('../controllers/estudiantesController');

router.get('/estudiantes', getAllEstudiante);//Obtiene todos los estudiantes
router.get('/estudiantes/:id',getEstudiante);//Obtiene estudiante por ID
router.get('/estudiantes/:matricula',getEstudianteMatricula);//Obtiene estudiante por MATRICULA
router.post('/estudiantes',createEstudiante);//Crea estudiante
router.put('/estudiantes/:id',updateEstudiante);//actualiza estudiante por ID
router.patch('/estudiantes/:id',updateEstudiante);//actualiza estudiante por ID
router.delete('/estudiantes/:id',deleteEstudiante);//Borra estudiante por ID

const {getAllCursos} = require ('../controllers/cursoController');
const {getCurso} = require ('../controllers/cursoController');
const {deleteCurso} = require ('../controllers/cursoController');


router.get('/cursos', getAllCursos);//Obtiene todos los cursos
router.get('/cursos/:id', getCurso);//Obtiene curso por ID
router.delete('/cursos/:id',deleteCurso);//Borra estudiante por ID

//exporta el express
module.exports = router;

