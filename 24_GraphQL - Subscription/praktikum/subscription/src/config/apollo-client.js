import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
    uri: "https://apt-muskrat-31.hasura.app/v1/graphql",
    headers:{
        'x-hasura-admin-secret': "4qRdzkUiB8iPl5r0Awx8K12tCWjVvcxoRF9MM57wjVXRsalylgCQHyRXoVFsPNd7"
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://apt-muskrat-31.hasura.app/v1/graphql',
    connectionParams:{
        headers:{
            'x-hasura-admin-secret': "4qRdzkUiB8iPl5r0Awx8K12tCWjVvcxoRF9MM57wjVXRsalylgCQHyRXoVFsPNd7"
        }
    }
}));

const splitLink = split(
    ({query}) =>{
        const definition = getMainDefinition(query);
        return(
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;