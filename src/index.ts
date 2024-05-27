import express from 'express';
import { graphqlHandler } from './infrastructure/graphql/config';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use('/graphql', graphqlHandler);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/graphql`);
});
