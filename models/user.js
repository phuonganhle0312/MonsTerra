const bcrypt = require("bcryptjs");
const { DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // email: {type: dataType.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true,
    //   },
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // User.associate = (models) => {
  //   User.hasOne(models.Collection, {
  //     onDelete: "cascade",
  //   });
  // };
  return User;
};
