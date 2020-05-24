const db = require('../models/database/db');

// db.Estudiante.create({
//     matricula: 1984,
//     apellidoPaterno:'Ingrid',
//     apellidoMaterno:'Johansson',
//     nombres:'Scarlette',
//     semestreIngreso:'2012',
//     creditosCursados: 350
// }).then(() => {
// console.log('Estudiante creado');
// }).catch(err => {
// console.log(err);
// }).then(() => {
// console.log('Cerrando conexión');
// db.sequelize.close();
// });

db.Estudiante.create({
    matricula: 1985,
    apellidoPaterno:'Elese',
    apellidoMaterno:'Lee',
    nombres:'Amanda',
    semestreIngreso:'2018',
    creditosCursados: 247
}).then(() => {
    console.log('Estudiante creado');
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('Cerrando conexión');
    db.sequelize.close();
});