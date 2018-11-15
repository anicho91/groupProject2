module.exports = function(connection, Sequelize) {
    const UserEmail = connection.define('UserEmail', {
        userName: Sequelize.STRING,
        email: Sequelize.STRING,
        
    });
    return UserEmail;
}

