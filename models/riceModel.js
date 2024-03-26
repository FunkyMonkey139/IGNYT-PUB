module.exports = (sequelize, DataTypes) => {
    const rice = sequelize.define(
        "rice",
        {
            riceid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            ricename: {
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
    return rice

};
