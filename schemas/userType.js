const userType = `#graphql
type userSchema{
    id:ID!
    name:String!
    email:String!
    inGames:[gameSchema]
}

extend type Query{
    usersquery:[userSchema]
    singleuserqurey(id:ID!):userSchema
}
`
export default userType