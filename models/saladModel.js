module.exports = (sequelize, DataTypes) => {
    const salad = sequelize.define(
        "salad",
        {
            saladid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            saladname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            imageurl: {
                type: DataTypes.STRING,
                allowNull: false,
            },

        },
        {
            timestamps: false,
            initialAutoIncrement: 10,
        }
    );
    return salad

};
