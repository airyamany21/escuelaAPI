const db = require('../models/database/db');
db.Curso.findAll().then((res) => {
	res.forEach ( rec => {
		console.log(
			rec.id,
			rec.nombre,
			rec.clave,
			rec.creditos);
		console.log(rec.dataValues);
	})
	db.sequelize;
});