module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
        species:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        area: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        rarity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color_src: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    })

    Pet.associate = models => {
        Pet.belongsTo(models.Collection, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Pet;
};

