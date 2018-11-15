module.exports = function(connection, Sequelize) {
    const UserEmail = connection.define('UserEmail', {
        name: Sequelize.TEXT,
        email: Sequelize.STRING,
    });
    return UserEmail;
}

