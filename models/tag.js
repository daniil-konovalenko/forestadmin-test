'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  });
  Tag.associate = function(models) {
      Tag.belongsToMany(models.Post, {through: "PostTags"})
  };
  return Tag;
};
