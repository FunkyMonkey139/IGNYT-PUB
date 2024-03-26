module.exports = (sequelize, DataTypes) => {
    const pasta = sequelize.define(
        "pasta",
        {
            pastaid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            pastaname: {
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
    return pasta

};
