const { Comment } = require('../models');

const commentData = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        blog_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        blog_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        blog_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        blog_id: 2,
        date_created: 'May 05, 2017'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;