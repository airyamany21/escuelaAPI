const db = require('../models/database/db');

db.Curso.destroy({
	where: {
		clave: 2126
	}
}).
then(res => {
	console.log('Registros borrados', res);
}).
catch(err => {
	console.log(err);
}).
then(() => {
	console.log('Cerrando conexion');
	db.sequelize;
});