import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import { githubResolver } from "./github/resolver";
import { state } from "./state";

const schema = buildSchema(`
  type Repository {
    id: Int
    name: String
    url: String
  }

  type Query {
    """
    Show the 10 most popular repositories of the user 'google' on GitHub.
    """
    googleRepositories: [Repository]
  }
`);

const root = {
  ...githubResolver(state)
};

export const graphqlHandler = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});