const User = require('./User');
const Blog = require('./Blog')
const Comment = require('./Comment')

User.hasMany(Blog, {
    foreignKey: 'id'
})

User.hasMany(Comment, {
    foreignKey: 'id'
})

Blog.belongsTo(User, {
    foreignKey: 'id'
})

Blog.hasMany(Comment, {
    foreignKey: 'id'
})

Comment.belongsTo(User, {
    foreignKey: 'id'
})

Comment.belongsTo(Blog, {
    foreignKey: 'id'
})

module.exports = {
    Blog,
    User,
    Comment,
}