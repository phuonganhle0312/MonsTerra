
module.exports = (sequelize, DataTypes) => {
    const Monster = sequelize.define('Monster', {
        dex_species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dex_area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dex_rarity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MonsterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    Monster.associate = models => {
        Monster.hasMany(models.Color, {
            onDelete: "cascade"
        });
    }

    return Monster;
}