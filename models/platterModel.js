module.exports = (sequelize, DataTypes) => {
    const platter = sequelize.define(
        "platter",
        {
            platterid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            plattername: {
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
    return platter

};
