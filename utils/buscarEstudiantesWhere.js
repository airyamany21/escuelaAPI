const db = require('../models/database/db');
db.Estudiante.findAll({
	where: {
		semestreIngreso: '2016-2',
		matricula: 1234566
	}
}).
then((res) => {
	res.forEach( rec => {
		console.log(rec.dataValues);
	})
	db.sequelize.close();
});