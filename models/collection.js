module.exports = (sequelize, DataTypes) => {
    const Collection = sequelize.define('Collection', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CollectionId: {
            type: DataTypes.INTEGER,
        }
    })

    Collection.associate = models => {
        Collection.hasMany(models.Pet, {
            onDelete: "cascade"
        });
        Collection.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Collection;
};