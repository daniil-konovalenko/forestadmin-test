'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  });

  Post.associate = function(models) {
      Post.belongsToMany(models.Tag, {through: "PostTags", as: "tags"});
      Post.belongsTo(models.User);
  };
  return Post;
};
