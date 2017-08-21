# forestadmin-test
Example project to test ForestAdmin + Express.js + Sequelize  
`HasMany`, `BelongsTo` and `BelongsToMany` relationships.  
In this case: `User` and `Post` have one-to-many association (A single user can have multiple posts).  
`Post` and `Tag` have many-to-many association (A single post can have multiple tags and a single tag can belong to multiple posts).  
# Try it
1. Head to https://www.forestadmin.com/ and register
2. Choose Express + Sequelize stack
3. Enter values of the `FOREST_ENV_SECRET` and `FOREST_AUTH_SECRET` to the .env file.
4. `$ npm install`
5. `$ npm start` 
6. Enjoy
