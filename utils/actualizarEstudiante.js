const db = require('../models/database/db');
const Op = db.Sequelize.Op;

db.Estudiante.update({
	creditosCursados : 350
}, {
	where: {
		creditosCursados: {
			[Op.ne]: 200
		}
	}
}).then((res) => {
	console.log('Registros actualziados:', res);
}).catch(err => {
	console.log(err);
}).then(() => {
	console.log('Cerrando conexion');
	db.sequelize.close();
});