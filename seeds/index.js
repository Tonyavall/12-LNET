const sequelize = require('../config/connection');

const seedBlogs = require('./blogData')
const seedUsers = require('./userData')
const seedComments = require('./commentData')

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('DB synced')
        await seedUsers()
        console.log('Users seeded')
        await seedBlogs()
        console.log('Blogs seeded')
        await seedComments()
        console.log('Comments seeded')
    } catch (err) {
        console.log(err)
    }
    process.exit(0);
}

seedAll()