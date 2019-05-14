function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get user Vadim')
            resolve('Vadim')
        }, 2000)
    })
}

function getBook(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finding books for user ' + result)
            resolve(result + ' book')
        }, 2000)
    })
}

function getEnd(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Read the book ' + result)
            resolve('Read the ' + result)
        }, 2000)
    })
}

getUser()
    .then(result => getBook(result))
    .then(result => getEnd(result))
    .then(result => console.log(result))
    .catch(err => console.log(err))
