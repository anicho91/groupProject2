module.exports = function(sequelize, Data) {
    const Inventory = sequelize.define('Inventory', {
        productName:{
        type: Data.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        },

        productDescription: {
        type: Data.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        },

        productAmount: {
        type: Data.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        }
    })

return Inventory;
}