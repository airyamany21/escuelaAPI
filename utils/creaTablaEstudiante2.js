const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'escolar',
	'backenduser',
	'12345678',
	{
		host: 'localhost',
		dialect: 'mysql'
	});

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
Estudiante.sync({ force: true});