import { Application } from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const initializeGraphQL = async (app: Application) => {
    
    const server = new ApolloServer({
        typeDefs: gql`
            type Query {
                hello: String
            }
        `,
        resolvers: {
            Query: {
                hello: () => 'Hello world!'
            }
        }
    }) as any

    await server.start()
    
    server.applyMiddleware({ app })

    console.log('\x1b[92m --- GRAPHQL SERVER INITIALIZATION SUCCESSFUL --- \x1b[0m')
}

export default initializeGraphQL