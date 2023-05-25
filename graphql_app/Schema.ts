import { gql } from 'apollo-server-express'

const Schema = gql`
    type Person {
        id: ID!
        name: String
    }
    #handle user commands
    type Query {
        getAllPeople: [Person]
        getPerson(id: Int): Person
    }
`

export default Schema