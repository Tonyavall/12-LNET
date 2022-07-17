const { Blog } = require('../models');

const blogData = [
    {
        title: 'testing1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        date_created: 'May 05, 2017'
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;