const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'escolar',
	'backenduser',
	'12345678',
	{
		host: 'localhost',
		dialect: 'mysql'
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
Curso.sync({ force: true});