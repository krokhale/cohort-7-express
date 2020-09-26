const {Sequelize, DataTypes, Model} = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

class ListItem extends Model {
}

ListItem.init({
    // Model attributes are defined here
    txt: {
        type: DataTypes.STRING,
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'ListItem', // We need to choose the model name
});

class Question extends Model {
}

Question.init({
    // Model attributes are defined here
    questionText: {
        type: 'LONGTEXT',
        // allowNull: false
    },
    answerOne: {
        type: 'LONGTEXT',
        // allowNull: false
    },
    answerTwo: {
        type: 'LONGTEXT',
        // allowNull: false
    },
    category: {
        type: 'LONGTEXT',
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Question', // We need to choose the model name
});

sequelize.sync({alter: true});

// export default sequelize
module.exports = {ListItem, Question};

