const { Comment } = require('../models');

const commentData = [
    {
        content: 'You are so cool!',
        user_id: 1,
        blog_id: 1,
        date_created: 'May 05, 2022'
    },
    {
        content: 'Awesome post!',
        user_id: 2,
        blog_id: 1,
        date_created: 'May 05, 2022'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;