const bcrypt = require ("bcryptjs"); 
 
module.exports = function (sequelize, dataType) {
  const User = sequelize.define("User", {
    email: {type: dataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: dataType.STRING,
      allowNull: false,
    },
  });

  // User.associate = function (models) {
  //   User.hasMany(models.Alert, {
  //     onDelete: "cascade",
  //   });
  // };

  return User;
};
