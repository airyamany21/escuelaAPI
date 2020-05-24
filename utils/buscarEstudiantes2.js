const db = require('../models/database/db');
db.Estudiante.findAll().then((res) => {
	res.forEach ( rec => {
		console.log(
			rec.id,
			rec.matricula,
			rec.apellidoPaterno,
			rec.apellidoMaterno,
			rec.nombres),
		    rec.semestreIngreso,
			rec.creditosCursados;
		console.log(rec.dataValues);
	})
	db.sequelize.close();
});