const { Blog } = require('../models');

const blogData = [
    {
        title: 'testing1',
        description: 'testing description here',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing2',
        description: 'testing description here',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing3',
        description: 'testing description here',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 1,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing4',
        description: 'testing description here',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        date_created: 'May 05, 2017'
    },
    {
        title: 'testing5',
        description: 'testing description here',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore quis, facilis dolores explicabo dolorem velit quod placeat laboriosam, inventore similique, ratione iste! Quidem eveniet vero dolorem quasi fuga. Provident.',
        user_id: 2,
        date_created: 'May 05, 2017'
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;