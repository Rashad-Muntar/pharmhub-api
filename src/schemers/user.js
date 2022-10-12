const User = `
    type User {
        name: String
        contact: String
        location: String
        Orders: [Product]
    }
`

module.exports = User