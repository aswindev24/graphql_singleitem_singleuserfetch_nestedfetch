const gameType = `#graphql
type gameSchema{
    id:ID!
    title:String!
    genre:String!
    inUser:[userSchema]!
    
}
extend type Query{
   gamesquery:[gameSchema]
   singlegamequery(id:ID!):gameSchema
}
`

export default gameType