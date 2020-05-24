const db = require('../models/database/db');

db.Estudiante.destroy({
	where: {
		creditosCursados: 350
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
	db.sequelize.close();
});