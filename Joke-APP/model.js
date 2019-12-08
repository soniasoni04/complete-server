const Sequelize = require("sequelize");
const sequelize = require("../db");
const Joke = sequelize.define("Joke", {
type: {
type: Sequelize.STRING,
allowNull: false
},
setup: {
type: Sequelize.STRING,
allowNull: false
},
punchline: {
type: Sequelize.STRING,
allowNull: false
}
});
module.exports = Joke;
