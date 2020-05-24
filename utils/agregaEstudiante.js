const db = require('../models/database/db');

db.Estudiante.create({
nombre: 'Tupac Sakur',
matricula: 1996,
semestreIngreso: '2017-2',
creditosCursados: 300
}).then(() => {
console.log('Estudiante creado');
}).catch(err => {
console.log(err);
}).then(() => {
console.log('Cerrando conexión');
db.sequelize.close();
});