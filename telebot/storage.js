const fs = require('fs')

const checkStatus = function(userId) {
    const users = getUsers()

    if (users[userId] !== undefined) {
        if (users[userId] === 'first') {
            users[userId] = 'second'
        } else if (users[userId] === 'second') {
            users[userId] = 'first'
        }
    } else {
        users[userId] = 'first'
    }

    console.log(users)
    writeUsers(users)

}

const getUsers = function() {
    const usersBuffer = fs.readFileSync('users.json')
    return JSON.parse(usersBuffer.toString())
}

const writeUsers = function(users) {
    fs.writeFileSync('users.json', JSON.stringify(users))
}

module.exports = {
    checkStatus
}