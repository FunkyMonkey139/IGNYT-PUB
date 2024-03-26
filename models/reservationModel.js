module.exports = (sequelize, DataTypes) => {
    const reservation = sequelize.define(
        "reservation",
        {
            reservationid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nocustomer: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            phno: {
                type: DataTypes.BIGINT(11),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            time: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            initialAutoIncrement: 10,
        }
    );
    return reservation

};
