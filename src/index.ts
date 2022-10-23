import * as express from 'express';
import helmet from 'helmet';
import * as cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';
import { resolver } from './resolver';
import 'dotenv/config';

import { connectMongoDB } from './db';
import routes from './routes';
// Create a new express application instance
const app = express();

// Call middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

async function graphql() {
    // connect mongodb to graphql
    await connectMongoDB();

    app.use('/api/:version', routes);

    app.use(
        process.env.GRAPHQL_PATH,
        graphqlHTTP(() => ({
            schema,
            rootValue: resolver,
            graphiql: true,
            customFormatErrorFn: (err: any) => {
                if (!err.originalError) {
                    return err;
                }
                const { data } = err.originalError;
                const message = err.message || 'An error occurred.';
                const code = err.originalError.code || 500;
                return {
                    message: message,
                    status: code,
                    data: data,
                };
            },
        })),
    );

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log('Server started on port ' + port + '!');
    });
}

graphql().catch((err) => console.log('Cannot connect MongoDB:', err));
