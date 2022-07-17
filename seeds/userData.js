const { User } = require('../models');

const userData = [
    {
        username: 'tooturnttony',
        first_name: 'tony',
        last_name: 'vallescas',
        email: 'tony@gmail.com',
        password: 'tony1234'
    },
    {
        username: 'allecussy',
        first_name: 'allec',
        last_name: 'uh',
        email: 'allec@gmail.com',
        password: 'allec1234'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;