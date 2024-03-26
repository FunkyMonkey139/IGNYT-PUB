module.exports = (sequelize, DataTypes) => {
    const egg = sequelize.define(
        "egg",
        {
            eggid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            eggname: {
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
    return egg

};

