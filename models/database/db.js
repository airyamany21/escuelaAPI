//db.js (BASE DE DATOS)
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'escolar',
    'backenduser',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql'
    });

const jobModelEstudiante = {};
const jobModelCurso = {};

//Modelo estudiante con atributos
const Estudiante = sequelize.define('estudiante',{
    matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    } ,
    apellidoPaterno: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    apellidoMaterno: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    nombres: {
        type: Sequelize.STRING,
        allowNull: false
    },
    matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    semestreIngreso: {
        type: Sequelize.STRING,
        allowNull: true
    },
    creditosCursados: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
});
const Curso = sequelize.define('curso',{
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clave: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    creditos: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
});
jobModelCurso.Curso = Curso;
jobModelEstudiante.Estudiante = Estudiante;
jobModelEstudiante.sequelize = sequelize;
jobModelEstudiante.Sequelize = Sequelize;
module.exports = jobModelEstudiante;
module.exports = jobModelCurso;
// Estudiante.belongsToMany(Curso,{through:EstudianteCurso});
// Curso.belongsToMany(Estudiante,{through:EstudianteCurso});
