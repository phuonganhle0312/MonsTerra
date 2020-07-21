module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define('Color', {
        src:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        colorId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Color.associate = models => {
        Color.belongsTo(models.Monster, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Color;
};
